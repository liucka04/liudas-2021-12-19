import {Dispatch} from 'react';
import {setSnapshotMessage} from '../../actions/setSnapshotMessage';
import {Message, OrderbookActionType, OrderbookContextState} from '../../types';
import {MessageFeedType} from '../../types/enums';
import {useMessageQueue} from './useMessageQueue';
import {useThrottle} from './useThrottle';

type Params = {
  state: OrderbookContextState;
  dispatch: Dispatch<OrderbookActionType>;
};

export const useMessages = ({state, dispatch}: Params) => {
  const {throttledSetAsks, throttledSetBids} = useThrottle();
  const {appendQueue, messageQueueRef} = useMessageQueue();

  const onMessage = ({data}: WebSocketMessageEvent) => {
    const messageJson: Message = JSON.parse(data);

    if (messageJson.feed === MessageFeedType.DELTA) {
      appendQueue({message: messageJson});

      if (!throttledSetAsks || !throttledSetBids) {
        return;
      }

      // When product subscription changes, clear queue
      // and cancel throttled state setting
      if (state.productId !== messageJson.product_id) {
        throttledSetAsks.cancel();
        throttledSetBids.cancel();
        messageQueueRef.current = {
          asks: [],
          bids: [],
        };
        return;
      }

      throttledSetAsks({
        messageQueueRef,
        stateAsks: state.asks ?? [],
        dispatch,
      });

      throttledSetBids({
        messageQueueRef,
        stateBids: state.bids ?? [],
        dispatch,
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
