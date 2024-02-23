import App from "../App";
import { About,  ById, Home, NotFound, Poki } from "../pages";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/poki",
          element: <Poki />,
        },
        {
          path: "/poki/pokemon/:id",
          element: <ById />,
        },
        {
          path: "/about",
          element: <About />,
          
         
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);