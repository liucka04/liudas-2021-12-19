import {Dispatch} from 'react';
import {RawPriceLevel, Message, OrderbookActionType} from '../types';
import {OrderbookAction} from '../types/enums';
import {mapPriceLevels} from './utils/mapPriceLevels';
import {mergePriceLevels} from './utils/mergePriceLevels';

type Params = {
  message: Message;
  dispatch: Dispatch<OrderbookActionType>;
  stateBids: RawPriceLevel[];
};

export const setBids = ({message, stateBids, dispatch}: Params) => {
  const {bids} = message;

  if (!bids) {
    return;
  }

  const {priceLevels, skipDispatch} = mergePriceLevels({
    incomingLevels: mapPriceLevels({levels: bids}),
    stateLevels: stateBids,
  });

  if (skipDispatch) {
    return;
  }

  dispatch({
    type: OrderbookAction.SET_BIDS,
    bids: priceLevels,
  });
};
