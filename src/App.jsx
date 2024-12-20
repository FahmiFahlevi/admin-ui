import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/signIn";
import ErrorRoute from "./pages/errorRoute";
import ForgotPasswordPage from "./pages/forgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensesPage from "./pages/expenses";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
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
    {
      path: "/balances",
      element: <BalancePage />,
    },
    {
      path: "/expenses",
      element: <ExpensesPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
