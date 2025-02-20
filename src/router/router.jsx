import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../page/Main-Layout/main";
import HomePage from "../page/Home/home";
import LoginPage from "../page/Login/LoginPage";
import CreateAccount from "../page/CreateAccount/CreateAccount";
// import checkJWT from "../auth/login-JWT";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // loader: checkJWT,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
]);
