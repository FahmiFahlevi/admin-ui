import FormSignIn from "../components/Fragment/FormSignIn";
import Authlayout from "../components/Layouts/AuthLayout";

const SignInPage = () => {
  return (
    <Authlayout type="sign in">
      <FormSignIn />
    </Authlayout>
  );
};

export default SignInPage;
