import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Provider as ReduxProvider } from 'react-redux';

import HeadSettings from '~/app/HeadSettings.tsx';
import AppRouters from '~/app/providers/AppRouters';
import GetFirstAuthData from '~/app/providers/GetFirstAuthData.tsx';
import { setupStore } from '~/app/store';

export const reduxStore = setupStore();

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <GetFirstAuthData />
      <HeadSettings />
      <MantineProvider>
        <AppRouters />
      </MantineProvider>
    </ReduxProvider>
  );
}

export default App;
