import { Center, Loader } from '@mantine/core';

const FullPageLoader = () => {
  return (
    <Center bg="#232530" h="100vh" w="100vw">
      <Loader color="#8872b0" size={100} />
    </Center>
  );
};

export default FullPageLoader;
