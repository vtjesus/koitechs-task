import { Form } from "react-router-dom";

export const Home = () => {
  return (
    <div className="p-4 lg:p-16 w-full flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="bg-white shadow-lg rounded-2xl max-w-screen-md w-full py-12 px-6 lg:px-12">
        
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-16 h-16 text-gray-800"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 .297C5.37.297 0 5.67 0 12.3c0 5.32 3.438 9.84 8.207 11.442.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.082-.73.082-.73 1.207.086 1.84 1.24 1.84 1.24 1.07 1.834 2.807 1.304 3.49.996.108-.774.418-1.304.76-1.604-2.667-.3-5.467-1.333-5.467-5.93 0-1.312.468-2.385 1.235-3.227-.123-.3-.535-1.52.117-3.165 0 0 1.007-.323 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.04.138 3 .405 2.292-1.553 3.297-1.23 3.297-1.23.653 1.645.242 2.865.12 3.165.77.842 1.233 1.915 1.233 3.227 0 4.61-2.807 5.625-5.48 5.922.43.373.81 1.102.81 2.222 0 1.606-.015 2.897-.015 3.297 0 .317.217.693.825.577C20.565 22.14 24 17.618 24 12.297 24 5.67 18.63.297 12 .297Z"
            />
          </svg>
        </div>

        
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold pb-2 text-gray-900">гитхаб резюмешка ваша</h1>
          <p className="text-sm text-gray-600">
            вставьте гитхаб ник пожалуйста
          </p>
        </div>

        
        <Form method="post" action="/">
          <input
            type="text"
            name="user"
            placeholder="сюда ваш ник"
            required
            className="block w-full rounded-lg border-0 py-2 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 text-sm leading-6 outline-0 mb-4 transition-all"
          />

          
          <button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 focus:ring-2 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 transition-all shadow-md hover:shadow-xl hover:scale-105 duration-300"
          >
            🔍 Найти кого-то
          </button>
        </Form>
      </div>
    </div>
  );
};
