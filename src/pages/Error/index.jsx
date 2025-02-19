import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();

  const errorCode = isRouteErrorResponse(error) ? error.status : 500;
  const errorMessage = isRouteErrorResponse(error) ? error.statusText : "Application Error";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white font-montserrat">
      <div className="text-center p-8">
        
        <div className="mx-auto w-24 h-24 mb-4 animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="text-red-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M4.93 4.93a10.5 10.5 0 0114.14 0m1.414 1.414a10.5 10.5 0 010 14.142m-1.414 1.414a10.5 10.5 0 01-14.142 0m-1.414-1.414a10.5 10.5 0 010-14.142" />
          </svg>
        </div>

        
        <h1 className="text-6xl font-bold tracking-wide">{errorCode}</h1>

       
        <p className="text-lg mt-2 text-gray-300">{errorMessage}</p>

        
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 text-lg font-medium bg-red-600 hover:bg-red-500 rounded-lg transition-all duration-300"
        >
          🔄 Вернуться на главную
        </a>
      </div>
    </div>
  );
};
