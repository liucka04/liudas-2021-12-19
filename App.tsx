import React from 'react';
import {ThemeProvider} from '@emotion/react';
import {RootNavigator} from './src/navigation';
import {OrderFeedProvider} from './src/screens/Orderbook/FeedProvider';
import {defaultTheme} from './src/themes/default';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <OrderFeedProvider>
        <RootNavigator />
      </OrderFeedProvider>
    </ThemeProvider>
  );
};

export default App;
