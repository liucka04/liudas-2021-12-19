import {Dispatch} from 'react';
import {Level} from '~/types';
import {Action, Message, MessageFeedType, OrderFeedState} from '../../types';
import {throttledSetDelta} from '../actions/setDelta';
import {setSnapshot} from '../actions/setSnapshot';

type Params = {
  state: OrderFeedState;
  dispatch: Dispatch<Action>;
};

export const useMessages = ({state, dispatch}: Params) => {
  const onMessage = ({data}: WebSocketMessageEvent) => {
    const messageJson: Message = JSON.parse(data);

    if (messageJson.feed === MessageFeedType.DELTA) {
      return throttledSetDelta({
        dispatch,
        message: messageJson,
        stateAsks: state.asks as Level[],
        stateBids: state.bids as Level[],
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
