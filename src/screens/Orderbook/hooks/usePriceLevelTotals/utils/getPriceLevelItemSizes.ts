import _ from 'lodash';
import {RawPriceLevel} from '~/providers/Orderbook/types';
import {LevelType} from '~/providers/Orderbook/types/enums';

type Params = {
  items: RawPriceLevel[];
  priceLevelType: LevelType;
  itemIndex: number;
};

export const getPriceLevelItemSizes = ({
  items,
  priceLevelType,
  itemIndex,
}: Params) => {
  const aboveOrBelowItems =
    priceLevelType === LevelType.BID
      ? _.take(items, itemIndex + 1)
      : _.takeRight(items, items.length - itemIndex);

  return aboveOrBelowItems.map(item => item.size);
};
