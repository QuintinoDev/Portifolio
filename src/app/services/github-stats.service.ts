import { Injectable, signal } from '@angular/core';

export interface GithubStats {
  publicRepos: number;
  followers: number;
  totalStars: number;
  topLanguages: { name: string; count: number }[];
  profileUrl: string;
}

type LoadState = 'idle' | 'loading' | 'ready' | 'error';

interface GithubUserResponse {
  public_repos: number;
  followers: number;
  html_url: string;
}

interface GithubRepoResponse {
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

const GITHUB_USERNAME = 'QuintinoDev';

/**
 * Pulls real, live numbers from GitHub's public REST API (no auth token,
 * no fabricated metrics) — repo count, followers, stars, and a language
 * breakdown computed from the user's own repos.
 */
@Injectable({ providedIn: 'root' })
export class GithubStatsService {
  readonly state = signal<LoadState>('idle');
  readonly stats = signal<GithubStats | null>(null);

  async load(): Promise<void> {
    if (this.state() === 'loading' || this.state() === 'ready') return;
    this.state.set('loading');

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
      ]);

      if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API request failed');

      const user = (await userRes.json()) as GithubUserResponse;
      const repos = (await reposRes.json()) as GithubRepoResponse[];

      const languageCounts = new Map<string, number>();
      let totalStars = 0;
      for (const repo of repos) {
        if (repo.fork) continue;
        totalStars += repo.stargazers_count ?? 0;
        if (repo.language) {
          languageCounts.set(repo.language, (languageCounts.get(repo.language) ?? 0) + 1);
        }
      }

      const topLanguages = [...languageCounts.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([name, count]) => ({ name, count }));

      this.stats.set({
        publicRepos: user.public_repos,
        followers: user.followers,
        totalStars,
        topLanguages,
        profileUrl: user.html_url,
      });
      this.state.set('ready');
    } catch {
      this.state.set('error');
    }
  }
}
