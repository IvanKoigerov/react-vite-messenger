import { Center, Stack } from '@mantine/core';
import { PropsWithChildren } from 'react';

const SingWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Center bg="#232530" h="100vh" w="100vw">
      <Stack gap="lg">{children}</Stack>
    </Center>
  );
};

export default SingWrapper;
