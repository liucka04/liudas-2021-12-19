import _ from 'lodash';
import {useCallback} from 'react';
import {OrderbookAction, ProductId} from '../types/enums';
import {subscribeProductEvent, unsubscribeProductEvent} from '../utils/events';
import {useOrderbookContext} from './useFeedContext';

export const useToggleProduct = () => {
  const {dispatch, socket, productId, isConnected, isLoading} =
    useOrderbookContext();

  const toggleProduct = useCallback(() => {
    _.throttle(() => {
      if (!isConnected || !socket) {
        return;
      }

      dispatch({
        type: OrderbookAction.SET_LOADING,
        isLoading: true,
      });

      dispatch({
        type: OrderbookAction.SET_PRICE_LEVELS,
        priceLevels: {
          asks: [],
          bids: [],
        },
      });

      const nextProductId =
        productId === ProductId.XBTUSD ? ProductId.ETHUSD : ProductId.XBTUSD;

      socket.send(unsubscribeProductEvent({productIds: [productId]}));
      socket.send(subscribeProductEvent({productIds: [nextProductId]}));

      dispatch({
        type: OrderbookAction.SET_PRODUCT_ID,
        productId: nextProductId,
      });

      dispatch({
        type: OrderbookAction.SET_LOADING,
        isLoading: false,
      });
    }, 200)();
  }, [dispatch, isConnected, productId, socket]);

  return {toggleProduct, isLoading};
};
