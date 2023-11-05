import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mantine/core';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { object, string } from 'yup';

import { APP_ROUTES } from '~/app/providers/AppRouters/routes.const.ts';
import { extraAuthAction } from '~/entities/auth';
import { useAppDispatch } from '~/shared/hooks/redux.ts';
import FormPasswordField from '~/shared/ui/form/FormPasswordField.tsx';
import FormTextField from '~/shared/ui/form/FormTextField.tsx';

const registerSchema = object().shape({
  name: string().trim().required().min(4).max(20),
  email: string().trim().required().email().max(24),
  password: string().trim().required().min(4).max(30),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { handleSubmit } = form;

  const onSubmit = handleSubmit((formValue) => {
    console.log(formValue);
    dispatch(extraAuthAction.register({ ...formValue, callback: () => navigate(APP_ROUTES.MAIN) }));
  });

  return (
    <FormProvider {...form}>
      <FormTextField name="name" w="400px" placeholder="Введите ваше имя" size="lg" />
      <FormTextField name="email" w="400px" placeholder="Введите ваш email" size="lg" />
      <FormPasswordField name="password" w="400px" placeholder="Введите пароль" size="lg" />
      <Button variant="filled" h={48} onClick={onSubmit}>
        Регистрация
      </Button>
      <Link to={APP_ROUTES.LOGIN}>Авторизация</Link>
    </FormProvider>
  );
};

export default RegisterForm;
