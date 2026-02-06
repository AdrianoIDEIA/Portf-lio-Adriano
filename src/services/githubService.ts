import { GitHubRepo } from '../types';
import { PINNED_REPOS } from '../constants';

export const fetchRepos = async (): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch('https://api.github.com/users/Dritcmg/repos?sort=updated&per_page=100');
    if (!response.ok) {
      throw new Error('Failed to fetch repos');
    }
    const data: GitHubRepo[] = await response.json();
    
    // 1. Try to find pinned repos
    const pinned = data.filter(repo => 
      PINNED_REPOS.some(pin => repo.name.toLowerCase() === pin.toLowerCase())
    );

    // 2. If pinned repos are found, return them (sorted by how they appear in the pinned list)
    if (pinned.length > 0) {
      return pinned.sort((a, b) => {
        const indexA = PINNED_REPOS.findIndex(p => p.toLowerCase() === a.name.toLowerCase());
        const indexB = PINNED_REPOS.findIndex(p => p.toLowerCase() === b.name.toLowerCase());
        return indexA - indexB;
      });
    }

    // 3. Fallback: If no pinned repos match, return top 6 repos by stars
    return data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);

  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
};