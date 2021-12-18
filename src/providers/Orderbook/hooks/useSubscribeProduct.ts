import {useCallback} from 'react';
import {OrderbookAction, ProductId} from '../types/enums';
import {subscribeProductEvent} from '../utils/events';
import {useOrderbookContext} from './useFeedContext';

export const useSubscribeProduct = () => {
  const {dispatch, socket, isConnected} = useOrderbookContext();

  const subscribeProduct = useCallback(
    ({productId}: {productId: ProductId}) => {
      if (!isConnected || !socket) {
        return;
      }

      socket.send(subscribeProductEvent({productIds: [productId]}));
      dispatch({
        type: OrderbookAction.SET_PRODUCT_ID,
        productId: productId,
      });
    },
    [dispatch, isConnected, socket],
  );

  return {subscribeProduct};
};
