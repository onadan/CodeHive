import { createBrowserRouter } from "react-router-dom";
import { Home, Workspace, Profile, New } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/workspace",
    element: <Workspace />,
  },
]);
