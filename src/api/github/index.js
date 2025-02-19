import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_AUTH,
});

export const getGitHubUser = async (userName) => {
  try {
    const response = await octokit.request(`GET /users/${userName}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getGitHubUserRepos = async (userName) => {
  try {
    const response = await octokit.request(
      `GET /users/${userName}/repos?per_page=100&sort=pushed`
    );
    return response;
  } catch (error) {
    return error;
  }
};
