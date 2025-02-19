export const getGitHubUserLanguages = (repos) => {
  const languageCount = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  const total = Object.values(languageCount).reduce((sum, count) => sum + count, 0);

  return Object.entries(languageCount)
    .map(([language, count]) => ({
      language,
      percent: Math.round((count / total) * 100),
    }))
    .sort((a, b) => b.percent - a.percent);
};
