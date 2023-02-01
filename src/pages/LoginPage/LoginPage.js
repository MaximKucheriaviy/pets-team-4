import { Helmet } from "react-helmet";
import { LoginForm } from "../../components/Authorization/LoginForm/loginForm";
import { Box } from "./LoginPage.styled";

export default function LoginPage() {
  return (
    <Box>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Box>
  );
}
