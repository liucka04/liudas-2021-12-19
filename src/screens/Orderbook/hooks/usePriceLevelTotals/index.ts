import _ from 'lodash';
import {useOrderbookContext} from '~/providers/Orderbook/hooks/useFeedContext';
import {LevelType} from '~/providers/Orderbook/types/enums';
import {useVisibleItemsCount} from '../useVisibleItemsCount';
import {calculateTotalForPriceLevels} from './utils/calculateTotalForPriceLevels';

export const usePriceLevelTotals = () => {
  const {asks, bids} = useOrderbookContext();
  const {visibleItemsInListCount} = useVisibleItemsCount();

  const visibleAsks = _.takeRight(asks, visibleItemsInListCount);
  const visibleBids = _.take(bids, visibleItemsInListCount);

  return {
    asks: calculateTotalForPriceLevels({
      priceLevels: visibleAsks,
      priceLevelType: LevelType.ASK,
    }),
    bids: calculateTotalForPriceLevels({
      priceLevels: visibleBids,
      priceLevelType: LevelType.BID,
    }),
  };
};
