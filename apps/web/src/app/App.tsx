import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import HeadSettings from '~/src/app/HeadSettings.tsx';
import AppRouters from '~/src/app/providers/AppRouters.tsx';

function App() {
  return (
    <>
      <HeadSettings />
      <MantineProvider>
        <AppRouters />
      </MantineProvider>
    </>
  );
}

export default App;
