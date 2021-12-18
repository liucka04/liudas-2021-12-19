import {Dispatch} from 'react';
import {Action, ActionType, LevelType, Message} from '../../types';
import {mapLevels} from './utils/mapLevels';
import {mergeLevels} from './utils/mergeLevels';

type Params = {
  message: Message;
  dispatch: Dispatch<Action>;
};

export const setSnapshot = ({dispatch, message}: Params) => {
  const {asks, bids} = message;

  if (!asks || !bids) {
    return;
  }

  const formattedAsks = mapLevels({levels: asks});
  const formattedBids = mapLevels({levels: bids});

  const snapshotMessage = {
    asks: mergeLevels({
      incomingLevels: formattedAsks,
      stateLevels: [],
      type: LevelType.ASK,
    }),
    bids: mergeLevels({
      incomingLevels: formattedBids,
      stateLevels: [],
      type: LevelType.BID,
    }),
  };

  dispatch({
    type: ActionType.SET_SNAPSHOT,
    snapshot: snapshotMessage,
  });
};
