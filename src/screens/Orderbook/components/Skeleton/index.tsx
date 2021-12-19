import React from 'react';
import {Box} from '~/components/Box';
import {Screen} from '~/components/Screen';
import {ScreenHeader} from '~/components/ScreenHeader';
import {SPREAD_HEIGHT} from '../../hooks/useVisibleItemsCount';
import {OrderbookListHeader} from '../ListHeader';
import {ListSkeleton} from './ListSkeleton';

const OrderbookSkeleton = () => {
  return (
    <Screen>
      <ScreenHeader title="Order Book" />
      <OrderbookListHeader />
      <ListSkeleton />
      <Box height={SPREAD_HEIGHT} />
      <ListSkeleton />
    </Screen>
  );
};

export default OrderbookSkeleton;
