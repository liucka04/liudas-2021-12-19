import React, {FC} from 'react';
import {Box} from '~/components/Box';
import {Header} from '~/components/Header';
import {Screen} from '~/components/Screen';
import Text from '~/components/Text';
import {Error} from './components/Error';
import {OrderbookFooter} from './components/Footer';
import {List} from './components/List';
import {useFeedContext} from './FeedProvider/hooks/useFeedContext';

export const OrderbookScreen: FC = () => {
  const {error, asks, bids, isLoading} = useFeedContext();

  if (isLoading || !bids || !asks) {
    return null;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Screen>
        <Header />
        <Box flexGrow={0}>
          <Box paddingY={1} flexDirection="row" justifyContent="space-between">
            <Box width={4 / 12} justifyContent="flex-end">
              <Text textAlign="right">Price</Text>
            </Box>
            <Box width={3 / 12} justifyContent="flex-end">
              <Text textAlign="right">Size</Text>
            </Box>
            <Box width={3 / 12} justifyContent="flex-end">
              <Text textAlign="right">Total</Text>
            </Box>
          </Box>
        </Box>
        <Box flex={1}>
          <List items={bids} />
          <List items={asks} />
        </Box>
        <OrderbookFooter />
      </Screen>
    </>
  );
};
