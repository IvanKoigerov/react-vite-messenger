import { Center, Stack } from '@mantine/core';
import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_ROUTES } from '~/app/providers/AppRouters/routes.const.ts';
import { useAppSelector } from '~/shared/hooks/redux.ts';

const SingWrapper = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);

  useEffect(() => {
    if (isAuth) navigate(APP_ROUTES.MAIN);
  }, [isAuth, navigate]);

  return (
    <Center bg="#232530" h="100vh" w="100vw">
      <Stack gap="lg">{children}</Stack>
    </Center>
  );
};

export default SingWrapper;
