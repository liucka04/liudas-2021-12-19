import {Dispatch} from 'react';
import {RawPriceLevel, Message, OrderbookActionType} from '../types';
import {OrderbookAction} from '../types/enums';
import {mapPriceLevels} from './utils/mapPriceLevels';
import {mergePriceLevels} from './utils/mergePriceLevels';

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
    asks: mergePriceLevels({
      incomingLevels: mapPriceLevels({levels: asks}),
      stateLevels: stateAsks,
    }),
    bids: mergePriceLevels({
      incomingLevels: mapPriceLevels({levels: bids}),
      stateLevels: stateBids,
    }),
  };

  dispatch({
    type: OrderbookAction.SET_PRICE_LEVELS,
    priceLevels,
  });
};
