import _ from 'lodash';
import {Level} from '~/providers/Orderbook/types';
import {LevelType} from '~/providers/Orderbook/types/enums';

type Params = {
  items: Level[];
  priceLevelType: LevelType;
  itemIndex: number;
};

export const getPriceLevelItemSizes = ({
  items,
  priceLevelType,
  itemIndex,
}: Params) => {
  const aboveItems =
    priceLevelType === LevelType.BID
      ? _.take(items, itemIndex + 1)
      : _.takeRight(items, items.length - itemIndex);

  return aboveItems.map(item => item.size);
};
