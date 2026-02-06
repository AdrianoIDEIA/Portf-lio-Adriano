import { GitHubRepo } from '../types';
import { EXCLUDED_REPOS } from '../constants';

export const fetchRepos = async (): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch('https://api.github.com/users/Dritcmg/repos?sort=updated&per_page=100');
    if (!response.ok) {
      throw new Error('Failed to fetch repos');
    }
    const data: GitHubRepo[] = await response.json();
    
    // Filter logic
    return data.filter(repo => {
      const name = repo.name.toLowerCase();
      // Exclude specific terms
      const isExcluded = EXCLUDED_REPOS.some(term => name.includes(term.toLowerCase()));
      // Also filter out forks if desired, or private repos (API only returns public anyway)
      return !isExcluded;
    });
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
};