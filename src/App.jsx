import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/signIn";
import ErrorRoute from "./pages/errorRoute";
import ForgotPasswordPage from "./pages/forgotPassword";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Halaman Utama</div>,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPasswordPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
