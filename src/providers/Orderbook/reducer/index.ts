import {OrderbookActionType, OrderFeedState} from '../types';
import {OrderbookAction} from '../types/enums';

export const reducer = (
  state: OrderFeedState,
  action: OrderbookActionType,
): OrderFeedState => {
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
    case OrderbookAction.SET_SNAPSHOT:
      return {
        ...state,
        asks: action.snapshot.asks,
        bids: action.snapshot.bids,
        isLoading: false,
      };
    case OrderbookAction.SET_DELTA:
      return {
        ...state,
        asks: action.delta.asks,
        bids: action.delta.bids,
      };
    default:
      return state;
  }
};
