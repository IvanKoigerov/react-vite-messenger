import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mantine/core';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { object, string } from 'yup';

import { APP_ROUTES } from '~/app/providers/AppRouters/routes.const.ts';
import { extraAuthAction } from '~/entities/auth';
import { useAppDispatch } from '~/shared/hooks/redux.ts';
import FormPasswordField from '~/shared/ui/form/FormPasswordField.tsx';
import FormTextField from '~/shared/ui/form/FormTextField.tsx';

const loginSchema = object().shape({
  email: string().trim().required().email().max(24),
  password: string().trim().required().min(4).max(30),
});

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const form = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit((formValue) => {
    dispatch(extraAuthAction.login({ ...formValue }));
  });

  return (
    <FormProvider {...form}>
      <FormTextField name="email" w="400px" placeholder="Введите ваш email" size="lg" />
      <FormPasswordField name="password" w="400px" placeholder="Введите пароль" size="lg" />
      <Button variant="filled" h={48} onClick={onSubmit}>
        Войти
      </Button>
      <Link to={APP_ROUTES.MAIN}>Регистрация</Link>
    </FormProvider>
  );
};

export default LoginForm;
