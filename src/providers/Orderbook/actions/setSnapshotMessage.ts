import {Dispatch} from 'react';
import {Message, OrderbookActionType} from '../types';
import {OrderbookAction} from '../types/enums';
import {mapPriceLevels} from './utils/mapPriceLevels';
import {trimPriceLevels} from './utils/trimPriceLevels';

type Params = {
  message: Message;
  dispatch: Dispatch<OrderbookActionType>;
};

export const setSnapshotMessage = ({dispatch, message}: Params) => {
  const {asks, bids} = message;

  if (!asks || !bids) {
    return;
  }

  dispatch({
    type: OrderbookAction.SET_PRICE_LEVELS,
    priceLevels: {
      asks: trimPriceLevels({priceLevels: mapPriceLevels({levels: asks})}),
      bids: trimPriceLevels({priceLevels: mapPriceLevels({levels: bids})}),
    },
  });

  dispatch({
    type: OrderbookAction.SET_LOADING,
    isLoading: false,
  });
};
