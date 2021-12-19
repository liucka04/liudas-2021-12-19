import React from 'react';
import {ThemeProvider} from '@emotion/react';
import {OrderbookProvider} from '~/providers/Orderbook';
import {RootNavigator} from './src/navigation';
import {defaultTheme} from './src/themes/default';
import {ErrorBoundary} from '~/components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={defaultTheme}>
        <OrderbookProvider>
          <RootNavigator />
        </OrderbookProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
