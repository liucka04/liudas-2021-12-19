import React from 'react';
import {Screen} from '~/components/Screen';
import {ScreenHeader} from '~/components/ScreenHeader';
import {OrderbookListHeader} from '../ListHeader';

const OrderbookSkeleton = () => {
  return (
    <Screen>
      <ScreenHeader title="Order Book" />
      <OrderbookListHeader />
    </Screen>
  );
};

export default OrderbookSkeleton;
