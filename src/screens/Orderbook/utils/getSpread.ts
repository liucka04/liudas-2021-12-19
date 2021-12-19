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
  const spreadPercentage = (spreadValue / highestBidPrice) * 100;

  return spreadPercentage.toFixed(2);
};

export const getSpread = ({bids, asks}: GetSpreadParams) => {
  const highestBidPrice = _.first(bids)?.price;
  const highestAskPrice = _.first(asks)?.price;

  if (highestBidPrice && highestAskPrice) {
    const spreadValue = Math.abs(highestBidPrice - highestAskPrice);
    return {
      value: _.round(spreadValue, 1).toLocaleString(),
      percentage: getPercentage({highestBidPrice, spreadValue}),
    };
  } else {
    return null;
  }
};
