import {createContext} from 'react';
import {OrderFeedContextType} from '../types';
import {ProductId} from '../types/enums';

export const defaultContext: OrderFeedContextType = {
  asks: null,
  bids: null,
  isLoading: true,
  error: undefined,
  isConnected: false,
  productId: ProductId.XBTUSD,
  isConnectionPaused: false,
  dispatch: () => {},
};

export const OrderFeedContext =
  createContext<OrderFeedContextType>(defaultContext);
