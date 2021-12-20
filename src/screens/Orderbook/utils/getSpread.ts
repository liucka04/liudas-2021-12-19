import _ from 'lodash';
import {PriceLevel} from '~/providers/Orderbook/types';

type GetSpreadParams = {
  bids: PriceLevel[];
  asks: PriceLevel[];
};

type GetPercentageParams = {
  spreadValue: number;
  lowestAskPrice: number;
};

const getPercentage = ({spreadValue, lowestAskPrice}: GetPercentageParams) => {
  const spreadPercentage = (spreadValue / lowestAskPrice) * 100;

  return spreadPercentage.toFixed(2);
};

export const getSpread = ({bids, asks}: GetSpreadParams) => {
  const highestBidPrice = _.first(bids)?.price;
  const lowestAskPrice = _.last(asks)?.price;

  if (highestBidPrice && lowestAskPrice) {
    const spreadValue = Math.abs(highestBidPrice - lowestAskPrice);
    return {
      value: _.round(spreadValue, 1).toFixed(1).toLocaleString(),
      percentage: getPercentage({lowestAskPrice, spreadValue}),
    };
  } else {
    return null;
  }
};
