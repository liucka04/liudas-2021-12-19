import _ from 'lodash';
import {Level} from '~/providers/Orderbook/types';

type GetSpreadParams = {
  bids: Level[];
  asks: Level[];
};

type GetPercentageParams = {
  spreadValue: number;
  highestBidPrice: number;
};

const getPercentage = ({spreadValue, highestBidPrice}: GetPercentageParams) => {
  return _.round(spreadValue / highestBidPrice, 2);
};

export const getSpread = ({bids, asks}: GetSpreadParams) => {
  const highestBidPrice = _.first(bids)?.price;
  const lowestAskPrice = _.first(asks)?.price;

  if (highestBidPrice && lowestAskPrice) {
    const spreadValue = Math.abs(highestBidPrice - lowestAskPrice);
    return {
      value: _.round(spreadValue, 1).toLocaleString(),
      percentage: getPercentage({highestBidPrice, spreadValue}),
    };
  } else {
    return null;
  }
};
