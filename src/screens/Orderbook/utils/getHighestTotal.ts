import _ from 'lodash';
import {Level} from '~/providers/Orderbook/types';

type Params = {
  asks: Level[];
  bids: Level[];
};

export const getHighestTotal = ({asks, bids}: Params) => {
  const highestAskTotal = _.first(asks)?.total as number;
  const highestBidTotal = _.last(bids)?.total as number;

  return highestAskTotal > highestBidTotal ? highestAskTotal : highestBidTotal;
};
