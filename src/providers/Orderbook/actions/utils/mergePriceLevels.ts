import _ from 'lodash';
import {RawPriceLevel} from '../../types';
import {trimPriceLevels} from './trimPriceLevels';

type Params = {
  stateLevels: RawPriceLevel[];
  incomingLevels: RawPriceLevel[];
};

export const mergePriceLevels = ({stateLevels, incomingLevels}: Params) => {
  // find levels with matching prices for replacement
  const intersectingLevels = _.intersectionWith(
    incomingLevels,
    stateLevels,
    (a, b) => a.price === b.price,
  );

  // remove old levels when incoming levels has matching prices
  const stateWithoutIntersectingLevels = _.reject(stateLevels, stateLevel =>
    intersectingLevels.some(
      intersectingLevel => intersectingLevel.price === stateLevel.price,
    ),
  );

  const allLevels = stateWithoutIntersectingLevels.concat(incomingLevels);

  const orderedLevels = _.orderBy(
    allLevels.filter(level => level.size > 0),
    ['price'],
    ['desc'],
  );

  return trimPriceLevels({priceLevels: orderedLevels});
};
