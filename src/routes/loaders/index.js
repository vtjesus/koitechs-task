import { getGitHubUser, getGitHubUserRepos } from "@/api";
import { getGitHubUserLanguages } from "@/helpers";

export const userLoader = async ({ params }) => {
  const userName = params.userName;

  const [userResponse, reposResponse] = await Promise.all([
    getGitHubUser(userName),
    getGitHubUserRepos(userName),
  ]);

  if (userResponse.status !== 200) {
    return {
      success: false,
      status: userResponse.status,
      message: userResponse.response.data.message,
    };
  }

  if (reposResponse.status !== 200) {
    return {
      success: false,
      status: reposResponse.status,
      message: reposResponse.response.data.message,
    };
  }

  const user = userResponse.data;
  const userRepos = reposResponse.data;
  const userLanguages = getGitHubUserLanguages(userRepos);

  return {
    success: true,
    status: 200,
    message: "Success",
    data: {
      user,
      repos: userRepos.slice(0, 10),
      languages: userLanguages,
    },
  };
};
