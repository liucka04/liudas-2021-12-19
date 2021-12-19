import React, {FC, useEffect} from 'react';
import {Box} from '~/components/Box';
import {Screen} from '~/components/Screen';
import {ScreenHeader} from '~/components/ScreenHeader';
import {useOrderbookContext} from '~/providers/Orderbook/hooks/useFeedContext';
import {useSubscribeProduct} from '~/providers/Orderbook/hooks/useSubscribeProduct';
import {PriceLevelType, ProductId} from '~/providers/Orderbook/types/enums';
import {Error} from './components/Error';
import {OrderbookFooter} from './components/Footer';
import {List} from './components/List';
import {OrderbookListHeader} from './components/ListHeader';
import {OrderbookSpread} from './components/Spread';
import OrderbookSkeleton from './components/Skeleton';
import {ResumeConnection} from './components/ResumeConnection';
import {getSpread} from './utils/getSpread';
import {usePriceLevelTotals} from './hooks/usePriceLevelTotals';
import {getHighestTotal} from './utils/getHighestTotal';

export const OrderbookScreen: FC = () => {
  const {error, isLoading} = useOrderbookContext();
  const {asks, bids} = usePriceLevelTotals();
  const {subscribeProduct} = useSubscribeProduct();

  useEffect(
    () => subscribeProduct({productId: ProductId.XBTUSD}),
    [subscribeProduct],
  );

  if (isLoading) {
    return <OrderbookSkeleton />;
  }

  if (error || !asks || !bids) {
    return <Error />;
  }

  const highestTotal = getHighestTotal({
    asks: asks,
    bids: bids,
  });

  return (
    <>
      <Screen>
        <ScreenHeader title="Order Book" />
        <OrderbookListHeader />
        <Box flex={1}>
          <List
            items={asks}
            type={PriceLevelType.ASK}
            highestTotal={highestTotal}
          />
          <OrderbookSpread spread={getSpread({asks, bids})} />
          <List
            items={bids}
            type={PriceLevelType.BID}
            highestTotal={highestTotal}
          />
        </Box>
        <OrderbookFooter />
      </Screen>
      <ResumeConnection />
    </>
  );
};
