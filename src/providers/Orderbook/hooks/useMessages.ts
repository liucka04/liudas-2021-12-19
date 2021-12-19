import {Dispatch} from 'react';
import {setSnapshotMessage} from '../actions/setSnapshotMessage';
import {
  Message,
  OrderbookActionType,
  OrderbookContextState,
  RawPriceLevel,
} from '../types';
import {MessageFeedType} from '../types/enums';
import {useThrottle} from './useThrottle';

type Params = {
  state: OrderbookContextState;
  dispatch: Dispatch<OrderbookActionType>;
};

export const useMessages = ({state, dispatch}: Params) => {
  const {throttledSetDeltaMessage} = useThrottle();

  const onMessage = ({data}: WebSocketMessageEvent) => {
    const messageJson: Message = JSON.parse(data);

    if (messageJson.feed === MessageFeedType.DELTA) {
      if (!throttledSetDeltaMessage) {
        return;
      }

      return throttledSetDeltaMessage({
        dispatch,
        message: messageJson,
        stateAsks: state.asks as RawPriceLevel[],
        stateBids: state.bids as RawPriceLevel[],
      });
    }

    if (messageJson.feed === MessageFeedType.SNAPSHOT) {
      return setSnapshotMessage({
        dispatch,
        message: messageJson,
      });
    }
  };

  return {onMessage};
};
