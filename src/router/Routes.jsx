import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Main/Main";
import SignIn from "../Pages/Auth/SignIn/SignIn";
import ForgatePassword from "../Pages/Auth/ForgatePassword/ForgatePassword";
import Newpass from "../Pages/Auth/NewPass/Newpass";
import VerifyPass from "../Pages/Auth/VerifyPass/VerifyPass";
import ContinuePage from "../Pages/Auth/ContinuePage/ContinuePage";
import AdminProfile from "../Pages/AdminProfile/AdminProfile";
import SIgnUp from "../Pages/Auth/SignUp/SIgnUp";
import Reports from "../Pages/Reports/Reports";
import PublicPrivacyPolicy from "../Pages/Public/PublicPrivacyPolicy";
import PublicTermsCondition from "../Pages/Public/PublicTermsCondition";
import PrivacyPolicy from "../Pages/Settings/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "../Pages/Settings/TermsCondition/TermsCondition";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SIgnUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn></SignIn>,
  },

  {
    path: "/forgate-password",
    element: <ForgatePassword></ForgatePassword>,
  },
  {
    path: "/varification",
    element: <VerifyPass></VerifyPass>,
  },

  {
    path: "/new-password",
    element: <Newpass></Newpass>,
  },
  {
    path: "/continue-page",
    element: <ContinuePage />,
  },
  {
    path: "/public/privacy-policy",
    element: <PublicPrivacyPolicy />,
  },
  {
    path: "/public/terms-and-conditions",
    element: <PublicTermsCondition />,
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Reports />,
          },

          {
            path: "/admin-profile",
            element: <AdminProfile />,
          },
          {
            path: "/settings/privacy-policy",
            element: <PrivacyPolicy />,
          },
          {
            path: "/settings/terms-condition",
            element: <TermsCondition />,
          },
        ],
      },
    ],
  },
]);
