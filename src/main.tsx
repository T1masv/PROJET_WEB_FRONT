import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ConnectionForm from "./ConnectionForm/ConnectionForm";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path : '/',
      element: <App />,
    },
    {
      path : '/login',
      element: <ConnectionForm />
    }
  ]
);

ReactDOM.createRoot(document.getElementById("root")as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
