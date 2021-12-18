import {useCallback} from 'react';
import {ActionType, ProductId} from '../../types';
import {subscribeProductEvent, unsubscribeProductEvent} from '../utils/events';
import {useFeedContext} from './useFeedContext';

export const useToggleProduct = () => {
  const {dispatch, socket, productId, isConnected} = useFeedContext();

  const toggleProduct = useCallback(() => {
    if (!isConnected || !socket) {
      return;
    }

    dispatch({
      type: ActionType.SET_LOADING,
      isLoading: true,
    });

    const nextProductId =
      productId === ProductId.XBTUSD ? ProductId.ETHUSD : ProductId.XBTUSD;

    socket.send(unsubscribeProductEvent({productIds: [productId]}));
    socket.send(subscribeProductEvent({productIds: [nextProductId]}));

    dispatch({type: ActionType.SET_PRODUCT_ID, productId: nextProductId});

    dispatch({
      type: ActionType.SET_LOADING,
      isLoading: false,
    });
  }, [dispatch, isConnected, productId, socket]);

  return {toggleProduct};
};
