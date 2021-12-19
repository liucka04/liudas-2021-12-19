import _ from 'lodash';
import {useOrderbookContext} from '~/providers/Orderbook/hooks/useFeedContext';
import {LevelType} from '~/providers/Orderbook/types/enums';
import {useVisibleItemsCount} from './useVisibleItemsCount';
import {getPriceLevelItemSizes} from './utils/getPriceLevelItemSizes';

export const usePriceLevelTotals = () => {
  const {asks, bids} = useOrderbookContext();
  const {visibleItemsInListCount} = useVisibleItemsCount();

  const visibleAsks = _.takeRight(asks, visibleItemsInListCount);
  const visibleBids = _.take(bids, visibleItemsInListCount);

  const formattedAsks = visibleAsks.map((priceLevelItem, index) => {
    return {
      ...priceLevelItem,
      total: _.sum(
        getPriceLevelItemSizes({
          items: visibleAsks,
          priceLevelType: LevelType.ASK,
          itemIndex: index,
        }),
      ),
    };
  });

  const formattedBids = visibleBids.map((priceLevelItem, index) => {
    return {
      ...priceLevelItem,
      total: _.sum(
        getPriceLevelItemSizes({
          items: visibleBids,
          priceLevelType: LevelType.BID,
          itemIndex: index,
        }),
      ),
    };
  });

  return {
    asks: formattedAsks,
    bids: formattedBids,
  };
};
