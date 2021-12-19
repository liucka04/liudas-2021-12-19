import _ from 'lodash';
import {RawPriceLevel} from '~/providers/Orderbook/types';
import {PriceLevelType} from '~/providers/Orderbook/types/enums';

type Params = {
  items: RawPriceLevel[];
  priceLevelType: PriceLevelType;
  itemIndex: number;
};

export const getPriceLevelItemSizes = ({
  items,
  priceLevelType,
  itemIndex,
}: Params) => {
  const aboveOrBelowItems =
    priceLevelType === PriceLevelType.BID
      ? _.take(items, itemIndex + 1)
      : _.takeRight(items, items.length - itemIndex);

  return aboveOrBelowItems.map(item => item.size);
};
