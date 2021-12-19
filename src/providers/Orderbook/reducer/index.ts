import {OrderbookActionType, OrderbookContextState} from '../types';
import {OrderbookAction} from '../types/enums';

export const orderbookReducer = (
  state: OrderbookContextState,
  action: OrderbookActionType,
): OrderbookContextState => {
  switch (action.type) {
    case OrderbookAction.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OrderbookAction.SET_CONNECTION_PAUSED:
      return {
        ...state,
        isConnectionPaused: action.isConnectionPaused,
      };
    case OrderbookAction.SET_PRODUCT_ID:
      return {
        ...state,
        productId: action.productId,
      };
    case OrderbookAction.SET_PRICE_LEVELS:
      return {
        ...state,
        asks: action.priceLevels.asks,
        bids: action.priceLevels.bids,
      };
    case OrderbookAction.SET_ASKS:
      return {
        ...state,
        asks: action.asks,
      };
    case OrderbookAction.SET_BIDS:
      return {
        ...state,
        bids: action.bids,
      };
    default:
      return state;
  }
};
