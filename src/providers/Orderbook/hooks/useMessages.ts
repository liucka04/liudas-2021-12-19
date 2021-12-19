import {Dispatch} from 'react';
import {setSnapshotMessage} from '../actions/setSnapshotMessage';
import {Message, OrderbookActionType, OrderbookContextState} from '../types';
import {MessageFeedType} from '../types/enums';
import {useThrottle} from './useThrottle';

type Params = {
  state: OrderbookContextState;
  dispatch: Dispatch<OrderbookActionType>;
};

export const useMessages = ({state, dispatch}: Params) => {
  const {throttledSetAsks, throttledSetBids} = useThrottle();

  const onMessage = ({data}: WebSocketMessageEvent) => {
    const messageJson: Message = JSON.parse(data);

    if (messageJson.feed === MessageFeedType.DELTA) {
      if (!throttledSetAsks || !throttledSetBids) {
        return;
      }

      throttledSetAsks({
        dispatch,
        message: messageJson,
        stateAsks: state.asks ?? [],
      });

      throttledSetBids({
        dispatch,
        message: messageJson,
        stateBids: state.bids ?? [],
      });

      return;
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
