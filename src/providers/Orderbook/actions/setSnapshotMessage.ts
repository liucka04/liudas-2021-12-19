import _ from 'lodash';
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

  const orderedAsks = _.orderBy(
    mapPriceLevels({levels: asks}).filter(ask => ask.price > 0),
    ['price'],
    ['desc'],
  );

  const orderedBids = _.orderBy(
    mapPriceLevels({levels: bids}).filter(bid => bid.price > 0),
    ['price'],
    ['desc'],
  );

  dispatch({
    type: OrderbookAction.SET_PRICE_LEVELS,
    priceLevels: {
      asks: trimPriceLevels({priceLevels: orderedAsks}),
      bids: trimPriceLevels({priceLevels: orderedBids}),
    },
  });

  dispatch({
    type: OrderbookAction.SET_LOADING,
    isLoading: false,
  });
};
