import { Helmet } from "react-helmet";
import { RegisterForm } from "../../components/Authorization/RegisterForm/registerForm";
import { Box } from "./RegisterPage.styled";
import { useDispatch } from "react-redux";
import { resetError } from "../../redux/auth/authSlice";
export default function RegisterPage() {
  useDispatch()(resetError());
  return (
    <Box>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Box>
  );
}
