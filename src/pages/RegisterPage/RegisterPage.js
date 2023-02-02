import { Helmet } from "react-helmet";
import { RegisterForm } from "../../components/Authorization/RegisterForm/registerForm";
import { Box } from "./RegisterPage.styled";
export default function RegisterPage() {
  return (
    <Box>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Box>
  );
}
