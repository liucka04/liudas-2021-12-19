import {Dispatch} from 'react';
import {RawPriceLevel, Message, OrderbookActionType} from '../types';
import {OrderbookAction} from '../types/enums';
import {mapPriceLevels} from './utils/mapPriceLevels';
import {mergePriceLevels} from './utils/mergePriceLevels';

type Params = {
  message: Message;
  dispatch: Dispatch<OrderbookActionType>;
  stateAsks: RawPriceLevel[];
};

export const setAsks = ({message, stateAsks, dispatch}: Params) => {
  const {asks} = message;

  if (!asks) {
    return;
  }

  const {priceLevels, skipDispatch} = mergePriceLevels({
    incomingLevels: mapPriceLevels({levels: asks}),
    stateLevels: stateAsks,
  });

  if (skipDispatch) {
    return;
  }

  dispatch({
    type: OrderbookAction.SET_ASKS,
    asks: priceLevels,
  });
};
