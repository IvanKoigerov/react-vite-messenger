import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import HeadSettings from '~/app/HeadSettings.tsx';
import AppRouters from '~/app/providers/AppRouters';
import '~/shared/lib/yupLocalize.ts';

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
