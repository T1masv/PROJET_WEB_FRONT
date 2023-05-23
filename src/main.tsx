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
import SignUp from "./SignUp/SignUp";
import UserManagement from "./UserManagement/UserManagement";
import UserUpdates from "./UserUpdates/UserUpdates";
import ClientManagement from "./ClientManagement/ClientManagement";
import Dashboard from "./Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <ConnectionForm />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/usermanagement",
    element: <UserManagement />,
  },
  {
    path: "/update/:id",
    element: <UserUpdates />,
  },
  {
    path: "/clientmanagement",
    element: <ClientManagement />,
  },
  {
    path: "/updateClient/:id",
    element: <UserUpdates />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
