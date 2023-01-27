import { Helmet } from 'react-helmet';
import { RegisterForm } from '../../components/Authorization/RegisterForm/registerForm';
export default function RegisterPage() {

  return (
      <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  )
}