import {Dispatch, MutableRefObject} from 'react';
import {RawPriceLevel, OrderbookActionType, MessageQueue} from '../types';
import {OrderbookAction} from '../types/enums';
import {mapPriceLevels} from './utils/mapPriceLevels';
import {mergePriceLevels} from './utils/mergePriceLevels';

type Params = {
  dispatch: Dispatch<OrderbookActionType>;
  stateBids: RawPriceLevel[];
  messageQueueRef: MutableRefObject<MessageQueue>;
};

export const setBids = ({stateBids, dispatch, messageQueueRef}: Params) => {
  const {bids: queuedBids} = messageQueueRef.current;

  dispatch({
    type: OrderbookAction.SET_BIDS,
    bids: mergePriceLevels({
      incomingLevels: mapPriceLevels({levels: queuedBids}),
      stateLevels: stateBids,
    }),
  });

  // clear message queue
  messageQueueRef.current.bids = [];
};
