import _ from 'lodash';
import {RawPriceLevel} from '../../types';
import {trimPriceLevels} from './trimPriceLevels';

type Params = {
  stateLevels: RawPriceLevel[];
  incomingLevels: RawPriceLevel[];
};

export const mergePriceLevels = ({stateLevels, incomingLevels}: Params) => {
  // uniqBy picks first unique element in array
  // most recent price levels are in the back of the array
  // so we reverse it and pick latest unique records
  // by price from the begining
  const uniquePriceLevels = _.uniqBy(
    _.reverse([...stateLevels, ...incomingLevels]),
    'price',
  );

  // remove nullish size levels and order descending by price
  const orderedLevels = _.orderBy(
    uniquePriceLevels.filter(level => level.size > 0),
    ['price'],
    ['desc'],
  );

  // we dont want to bloat the state, so we trim the final array
  return trimPriceLevels({priceLevels: orderedLevels});
};
