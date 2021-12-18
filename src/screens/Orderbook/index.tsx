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
import {LevelType} from './types';
import {getSpread} from './utils/getSpread';
import {getHighestTotal} from './utils/getHighestTotal';

export const OrderbookScreen: FC = () => {
  const {error, asks, bids, isLoading} = useFeedContext();

  if (isLoading) {
    return null;
  }

  if (error || !bids || !asks) {
    return <Error />;
  }

  const highestTotal = getHighestTotal({asks, bids});

  return (
    <Screen>
      <Header />
      <OrderbookListHeader />
      <Box flex={1}>
        <List items={asks} type={LevelType.ASK} highestTotal={highestTotal} />
        <OrderbookSpread spread={getSpread({asks, bids})} />
        <List items={bids} type={LevelType.BID} highestTotal={highestTotal} />
      </Box>
      <OrderbookFooter />
    </Screen>
  );
};
