import {Action, ActionType, OrderFeedState} from '../../types';

export const reducer = (
  state: OrderFeedState,
  action: Action,
): OrderFeedState => {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case ActionType.SET_CONNECTION_PAUSED:
      return {
        ...state,
        isConnectionPaused: action.isConnectionPaused,
      };
    case ActionType.SET_PRODUCT_ID:
      return {
        ...state,
        productId: action.productId,
      };
    case ActionType.SET_SNAPSHOT:
      return {
        ...state,
        asks: action.snapshot.asks,
        bids: action.snapshot.bids,
        isLoading: false,
      };
    case ActionType.SET_DELTA:
      return {
        ...state,
        asks: action.delta.asks,
        bids: action.delta.bids,
      };
    default:
      return state;
  }
};
