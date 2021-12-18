import React, {FC} from 'react';
import {Box} from '~/components/Box';
import {Header} from '~/components/Header';
import {Screen} from '~/components/Screen';
import {Error} from './components/Error';
import {OrderbookFooter} from './components/Footer';
import {List} from './components/List';
import {OrderbookListHeader} from './components/ListHeader';
import {OrderbookSpread} from './components/Spread';
import {useFeedContext} from './FeedProvider/hooks/useFeedContext';
import {getSpread} from './utils/getSpread';

export const OrderbookScreen: FC = () => {
  const {error, asks, bids, isLoading} = useFeedContext();

  if (isLoading || !bids || !asks) {
    return null;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Screen>
      <Header />
      <OrderbookListHeader />
      <Box flex={1}>
        <List items={bids} type="asks" />
        <OrderbookSpread spread={getSpread({asks, bids})} />
        <List items={asks} type="bids" />
      </Box>
      <OrderbookFooter />
    </Screen>
  );
};
