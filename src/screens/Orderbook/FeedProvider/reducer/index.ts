import {Level} from '~/types';
import {Action, ActionType, OrderFeedState} from '../../types';
import {mergeLevels} from './utils/mergeLevels';

export const reducer = (
  state: OrderFeedState,
  action: Action,
): OrderFeedState => {
  switch (action.type) {
    case ActionType.SET_SNAPSHOT:
      const {asks, bids} = action.snapshot;
      return {
        ...state,
        asks,
        bids,
        isLoading: false,
      };
    case ActionType.SET_DELTA:
      return {
        ...state,
        asks: mergeLevels({
          stateLevels: state.asks as Level[],
          incomingLevels: action.delta.asks,
        }),
        bids: mergeLevels({
          stateLevels: state.bids as Level[],
          incomingLevels: action.delta.bids,
        }),
      };
    default:
      return state;
  }
};
