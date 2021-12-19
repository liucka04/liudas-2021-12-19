import {Dispatch} from 'react';
import {throttledSetDelta} from '../actions/setDelta';
import {setSnapshot} from '../actions/setSnapshot';
import {
  Message,
  OrderbookActionType,
  OrderbookContextState,
  RawPriceLevel,
} from '../types';
import {MessageFeedType} from '../types/enums';

type Params = {
  state: OrderbookContextState;
  dispatch: Dispatch<OrderbookActionType>;
};

export const useMessages = ({state, dispatch}: Params) => {
  const onMessage = ({data}: WebSocketMessageEvent) => {
    const messageJson: Message = JSON.parse(data);

    if (messageJson.feed === MessageFeedType.DELTA) {
      return throttledSetDelta({
        dispatch,
        message: messageJson,
        stateAsks: state.asks as RawPriceLevel[],
        stateBids: state.bids as RawPriceLevel[],
      });
    }

    if (messageJson.feed === MessageFeedType.SNAPSHOT) {
      return setSnapshot({
        dispatch,
        message: messageJson,
      });
    }
  };

  return {onMessage};
};
