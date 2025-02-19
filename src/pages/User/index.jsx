import { useLoaderData, useNavigate } from "react-router-dom";
import { date } from "@/helpers";

export const User = () => {
  const { success, status, message, data } = useLoaderData();
  const navigate = useNavigate();

  if (!success) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="text-white text-xl">{status} | {message}</div>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-16 w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-screen-lg min-h-full mx-auto bg-white shadow-xl rounded-2xl p-6 lg:p-12 relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 bg-black text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          ← Back to Home
        </button>
        <div className="text-center mb-6">
          <img
            src={data.user.avatar_url}
            alt={data.user.login}
            className="w-24 h-24 mx-auto rounded-full shadow-md"
          />
          <h1 className="text-2xl font-bold text-gray-900 mt-4">{data.user.name ?? data.user.login}</h1>
          <p className="text-gray-500">@{data.user.login}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-2 border-gray-300">Profile</h2>
          <div className="px-4 text-sm text-gray-700">
            <p className="mt-2">
              <span className="font-bold pr-1">Since:</span>
              <span>{date(data.user.created_at)}</span>
            </p>
            <p>
              <span className="font-bold pr-1">Repositories:</span>
              {data.user.public_repos > 0 ? (
                <a
                  href={`${data.user.html_url}?tab=repositories`}
                  target="_blank"
                  className="text-blue-600 hover:text-blue-500 transition underline"
                >
                  {data.user.public_repos} public repositories
                </a>
              ) : (
                <span className="text-gray-500">Public repositories not found</span>
              )}
            </p>
          </div>
        </div>
        {data.languages.length ? (
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b pb-2 border-gray-300">Languages</h2>
            <div className="px-4 text-sm text-gray-700 mt-2">
              {data.languages.map((language, index) => (
                <p key={index} className="flex justify-between">
                  <span className="font-bold">{language.language}:</span>
                  <span>{language.percent}%</span>
                </p>
              ))}
            </div>
          </div>
        ) : null}
        {data.repos.length ? (
          <div>
            <h2 className="text-lg font-semibold border-b pb-2 border-gray-300">Repositories</h2>
            <div className="px-4 text-sm text-gray-700 mt-3">
              {data.repos.map((repo, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-3 rounded-lg mb-2 shadow-sm hover:bg-gray-200 transition"
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    className="font-semibold text-blue-600 hover:text-blue-500 transition underline"
                  >
                    {repo.name}
                  </a>
                  <span className="text-xs text-gray-500">{date(repo.created_at)} - {date(repo.updated_at)}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
