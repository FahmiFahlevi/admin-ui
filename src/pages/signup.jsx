import FormSignUp from "../components/Fragment/FormSignUp";
import Authlayout from "../components/Layouts/AuthLayout";

const SignUpPage = () => {
  return (
    <Authlayout type="sign up">
      <FormSignUp />
    </Authlayout>
  );
};

export default SignUpPage;
