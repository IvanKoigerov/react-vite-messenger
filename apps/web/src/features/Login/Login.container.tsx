import { Button, Center, Stack, TextInput } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_ROUTES } from '~/app/providers/AppRouters/routes.const.ts';

const LoginContainer = () => {
  const navigate = useNavigate();

  return (
    <Center bg="#232530" h="100vh" w="100vw">
      <Stack gap="lg">
        <TextInput w="400px" placeholder="Введите ваше имя" size="lg" />
        <Button onClick={() => navigate(APP_ROUTES.MAIN)} variant="filled">
          Продолжить
        </Button>
      </Stack>
    </Center>
  );
};

export default LoginContainer;
