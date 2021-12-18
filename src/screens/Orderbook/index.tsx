import React, {FC, useEffect} from 'react';
import {Box} from '~/components/Box';
import {Screen} from '~/components/Screen';
import {Error} from './components/Error';
import {OrderbookFooter} from './components/Footer';
import {List} from './components/List';
import {ScreenHeader} from '~/components/ScreenHeader';
import {OrderbookListHeader} from './components/ListHeader';
import {OrderbookSpread} from './components/Spread';
import {useFeedContext} from './FeedProvider/hooks/useFeedContext';
import {LevelType, ProductId} from './types';
import {getSpread} from './utils/getSpread';
import {getHighestTotal} from './utils/getHighestTotal';
import OrderbookSkeleton from './components/Skeleton';
import {useSubscribeProduct} from './FeedProvider/hooks/useSubscribeProduct';

export const OrderbookScreen: FC = () => {
  const {error, asks, bids, isLoading} = useFeedContext();
  const {subscribeProduct} = useSubscribeProduct();

  useEffect(
    () => subscribeProduct({productId: ProductId.XBTUSD}),
    [subscribeProduct],
  );

  if (isLoading) {
    return <OrderbookSkeleton />;
  }

  if (error || !bids || !asks) {
    return <Error />;
  }

  const highestTotal = getHighestTotal({asks, bids});

  return (
    <Screen>
      <ScreenHeader title="Order Book" />
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
