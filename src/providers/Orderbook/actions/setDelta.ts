import _ from 'lodash';
import {Dispatch} from 'react';
import {RawPriceLevel, Message, OrderbookActionType} from '../types';
import {OrderbookAction} from '../types/enums';
import {mapLevels} from './utils/mapLevels';
import {mergeLevels} from './utils/mergeLevels';

type Params = {
  message: Message;
  dispatch: Dispatch<OrderbookActionType>;
  stateAsks: RawPriceLevel[];
  stateBids: RawPriceLevel[];
};

export const setDelta = ({message, stateAsks, stateBids, dispatch}: Params) => {
  const {asks, bids} = message;

  if (!asks || !bids) {
    return;
  }

  const deltaMessage = {
    asks: mergeLevels({
      incomingLevels: mapLevels({levels: asks}),
      stateLevels: stateAsks,
    }),
    bids: mergeLevels({
      incomingLevels: mapLevels({levels: bids}),
      stateLevels: stateBids,
    }),
  };

  dispatch({
    type: OrderbookAction.SET_DELTA,
    delta: deltaMessage,
  });
};

export const throttledSetDelta = _.throttle(setDelta, 500);
