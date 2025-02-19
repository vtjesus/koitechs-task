import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components";
import {Error, Home, User} from "@/pages";
import {appAction, userLoader} from "@/routes";


export const router = createBrowserRouter([
  {
            path: "/",
            element: <App/>,
            errorElement: <Error/>,
            action: appAction,
            children: [
      {
          index: true,
          element: <Home/>,
      },
      {
            path: "/:userName",
            element: <User/>,
            loader: userLoader
      }
    ]
  },
]);
