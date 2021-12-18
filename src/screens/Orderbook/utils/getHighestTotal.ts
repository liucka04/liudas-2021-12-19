import _ from 'lodash';
import {Level} from '~/types';

type Params = {
  asks: Level[];
  bids: Level[];
};

export const getHighestTotal = ({asks, bids}: Params) => {
  const highestAskTotal = _.first(asks)?.total;
  const highestBidTotal = _.last(bids)?.total;

  if (!highestAskTotal || !highestBidTotal) {
    return null;
  }

  return highestAskTotal > highestBidTotal ? highestAskTotal : highestBidTotal;
};
