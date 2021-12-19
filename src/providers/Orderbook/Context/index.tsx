import {createContext} from 'react';
import {OrderbookContextType} from '../types';
import {ProductId} from '../types/enums';

export const defaultContext: OrderbookContextType = {
  asks: null,
  bids: null,
  isLoading: true,
  error: undefined,
  isConnected: false,
  productId: ProductId.XBTUSD,
  isConnectionPaused: false,
  dispatch: () => {},
};

export const OrderbookContext =
  createContext<OrderbookContextType>(defaultContext);
