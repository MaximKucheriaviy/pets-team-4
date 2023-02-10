import { Helmet } from "react-helmet";
import { LoginForm } from "../../components/Authorization/LoginForm/loginForm";
import { Box } from "./LoginPage.styled";
import { useDispatch } from "react-redux";
import { resetError } from "../../redux/auth/authSlice";

export default function LoginPage() {
  useDispatch()(resetError());
  return (
    <Box>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Box>
  );
}
