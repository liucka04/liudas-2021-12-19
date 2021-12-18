import {Dispatch} from 'react';
import {Action, ActionType, Message} from '../../types';
import {mapLevels} from './utils/mapLevels';

type Params = {
  orderFeed: Message;
  dispatch: Dispatch<Action>;
};

export const setSnapshot = ({orderFeed, dispatch}: Params) => {
  const {asks, bids} = orderFeed;

  if (!asks || !bids) {
    return;
  }

  const snapshot = {
    asks: mapLevels({levels: asks}),
    bids: mapLevels({levels: bids}),
  };

  dispatch({
    type: ActionType.SET_SNAPSHOT,
    snapshot,
  });
};
