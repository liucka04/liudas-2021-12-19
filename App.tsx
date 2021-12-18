import React from 'react';
import {ThemeProvider} from '@emotion/react';
import {OrderbookProvider} from '~/providers/Orderbook';
import {RootNavigator} from './src/navigation';
import {defaultTheme} from './src/themes/default';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <OrderbookProvider>
        <RootNavigator />
      </OrderbookProvider>
    </ThemeProvider>
  );
};

export default App;
