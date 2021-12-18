import {createContext} from 'react';
import {OrderFeedContextType} from '../../types';

export const defaultContext: OrderFeedContextType = {
  asks: null,
  bids: null,
  isLoading: true,
  error: undefined,
  feedProductIds: [],
  dispatch: () => {},
};

export const OrderFeedContext =
  createContext<OrderFeedContextType>(defaultContext);
