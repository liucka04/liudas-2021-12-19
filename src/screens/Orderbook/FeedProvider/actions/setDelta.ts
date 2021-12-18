import _ from 'lodash';
import {Dispatch} from 'react';
import {Action, ActionType, Message} from '../../types';
import {mapLevels} from './utils/mapLevels';

type Params = {
  orderFeed: Message;
  dispatch: Dispatch<Action>;
};

export const setDelta = ({orderFeed, dispatch}: Params) => {
  const {asks, bids} = orderFeed;

  if (!asks || !bids) {
    return;
  }

  dispatch({
    type: ActionType.SET_DELTA,
    delta: {
      asks: mapLevels({levels: asks}),
      bids: mapLevels({levels: asks}),
    },
  });
};

export const throttledSetDelta = _.throttle(setDelta, 500);
