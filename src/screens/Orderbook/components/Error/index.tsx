import React from 'react';
import {Error} from '~/components/Error';
import {useOrderbookContext} from '~/providers/Orderbook/hooks/useFeedContext';
import {useSubscribeProduct} from '~/providers/Orderbook/hooks/useSubscribeProduct';
import {OrderbookAction} from '~/providers/Orderbook/types/enums';

export const OrderbookError = () => {
  const {dispatch, productId} = useOrderbookContext();
  const {subscribeProduct} = useSubscribeProduct();

  const onRefresh = () => {
    dispatch({type: OrderbookAction.SET_ERROR, errorMessage: undefined});
    subscribeProduct({productId: productId});
  };

  return <Error onRefresh={onRefresh} />;
};
