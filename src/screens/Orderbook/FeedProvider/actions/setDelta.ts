import _ from 'lodash';
import {Dispatch} from 'react';
import {Level} from '~/types';
import {Action, ActionType, LevelType, Message} from '../../types';
import {mapLevels} from './utils/mapLevels';
import {mergeLevels} from './utils/mergeLevels';

type Params = {
  message: Message;
  dispatch: Dispatch<Action>;
  stateAsks: Level[];
  stateBids: Level[];
};

export const setDelta = ({message, stateAsks, stateBids, dispatch}: Params) => {
  const {asks, bids} = message;

  if (!asks || !bids) {
    return;
  }

  const formattedIncomingAsks = mapLevels({levels: asks});
  const formattedIncomingBids = mapLevels({levels: bids});

  const deltaMessage = {
    asks: mergeLevels({
      incomingLevels: formattedIncomingAsks,
      stateLevels: stateAsks,
      type: LevelType.ASK,
    }),
    bids: mergeLevels({
      incomingLevels: formattedIncomingBids,
      stateLevels: stateBids,
      type: LevelType.BID,
    }),
  };

  dispatch({
    type: ActionType.SET_DELTA,
    delta: deltaMessage,
  });
};

export const throttledSetDelta = _.throttle(setDelta, 500);
