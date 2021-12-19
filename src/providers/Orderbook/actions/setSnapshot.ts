import {Dispatch} from 'react';
import {Message, OrderbookActionType} from '../types';
import {OrderbookAction} from '../types/enums';
import {mapLevels} from './utils/mapLevels';

type Params = {
  message: Message;
  dispatch: Dispatch<OrderbookActionType>;
};

export const setSnapshot = ({dispatch, message}: Params) => {
  const {asks, bids} = message;

  if (!asks || !bids) {
    return;
  }

  dispatch({
    type: OrderbookAction.SET_SNAPSHOT,
    snapshot: {
      asks: mapLevels({levels: asks}),
      bids: mapLevels({levels: bids}),
    },
  });
};
