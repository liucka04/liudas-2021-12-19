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

export const setDeltaMessage = ({
  message,
  stateAsks,
  stateBids,
  dispatch,
}: Params) => {
  const {asks, bids} = message;

  if (!asks || !bids) {
    return;
  }

  const priceLevels = {
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
    type: OrderbookAction.SET_PRICE_LEVELS,
    priceLevels,
  });
};
