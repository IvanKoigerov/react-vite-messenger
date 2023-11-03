import { useNavigate } from 'react-router-dom';

import LoginForm from '~/features/Login/ui/LoginForm.tsx';
import SingWrapper from '~/features/Login/ui/SingWrapper.tsx';

const LoginContainer = () => {
  return (
    <SingWrapper>
      <LoginForm />
    </SingWrapper>
  );
};

export default LoginContainer;
