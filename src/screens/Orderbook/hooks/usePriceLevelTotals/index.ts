import _ from 'lodash';
import {useOrderbookContext} from '~/providers/Orderbook/hooks/useFeedContext';
import {PriceLevelType} from '~/providers/Orderbook/types/enums';
import {useVisibleItemsCount} from '../useVisibleItemsCount';
import {calculateTotalForPriceLevels} from './utils/calculateTotalForPriceLevels';

export const usePriceLevelTotals = () => {
  const {asks, bids} = useOrderbookContext();
  const {visibleItemsInListCount} = useVisibleItemsCount();

  const visibleAsks = _.take(asks, visibleItemsInListCount);
  const visibleBids = _.take(bids, visibleItemsInListCount);

  return {
    asks: calculateTotalForPriceLevels({
      priceLevels: visibleAsks,
      priceLevelType: PriceLevelType.ASK,
    }),
    bids: calculateTotalForPriceLevels({
      priceLevels: visibleBids,
      priceLevelType: PriceLevelType.BID,
    }),
  };
};
