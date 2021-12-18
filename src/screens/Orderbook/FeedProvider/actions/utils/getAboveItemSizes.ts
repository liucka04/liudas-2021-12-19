import _ from 'lodash';
import {Level} from '~/types';

type Params = {
  items: Level[];
  isBids: boolean;
  itemIndex: number;
};
export const getAboveItemSizes = ({items, isBids, itemIndex}: Params) => {
  const aboveItems = isBids
    ? _.take(items, itemIndex + 1)
    : _.takeRight(items, items.length - itemIndex);

  return aboveItems.map(item => item.size);
};
