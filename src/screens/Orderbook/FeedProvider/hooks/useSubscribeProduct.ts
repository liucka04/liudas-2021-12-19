import {useCallback} from 'react';
import {ActionType, ProductId} from '../../types';
import {subscribeProductEvent} from '../utils/events';
import {useFeedContext} from './useFeedContext';

export const useSubscribeProduct = () => {
  const {dispatch, socket, isConnected} = useFeedContext();

  const subscribeProduct = useCallback(
    ({productId}: {productId: ProductId}) => {
      if (!isConnected || !socket) {
        return;
      }

      socket.send(subscribeProductEvent({productIds: [productId]}));
      dispatch({
        type: ActionType.SET_PRODUCT_ID,
        productId: productId,
      });
    },
    [dispatch, isConnected, socket],
  );

  return {subscribeProduct};
};
