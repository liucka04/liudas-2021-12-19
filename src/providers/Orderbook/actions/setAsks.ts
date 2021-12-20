import {Dispatch, MutableRefObject} from 'react';
import {RawPriceLevel, OrderbookActionType, MessageQueue} from '../types';
import {OrderbookAction} from '../types/enums';
import {mapPriceLevels} from './utils/mapPriceLevels';
import {mergePriceLevels} from './utils/mergePriceLevels';

type Params = {
  messageQueueRef: MutableRefObject<MessageQueue>;
  dispatch: Dispatch<OrderbookActionType>;
  stateAsks: RawPriceLevel[];
};

export const setAsks = ({messageQueueRef, stateAsks, dispatch}: Params) => {
  const {asks: queuedAsks} = messageQueueRef.current;

  dispatch({
    type: OrderbookAction.SET_ASKS,
    asks: mergePriceLevels({
      incomingLevels: mapPriceLevels({levels: queuedAsks}),
      stateLevels: stateAsks,
    }),
  });

  // clear message queue
  messageQueueRef.current.asks = [];
};
