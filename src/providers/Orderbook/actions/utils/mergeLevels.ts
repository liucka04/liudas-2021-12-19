import _ from 'lodash';
import {Level} from '../../types';
import {LevelType} from '../../types/enums';
import {getAboveItemSizes} from './getAboveItemSizes';

type Params = {
  stateLevels: Level[];
  incomingLevels: Level[];
  type: LevelType;
};

export const mergeLevels = ({stateLevels, incomingLevels, type}: Params) => {
  // find levels with matching prices for replacement
  const intersectingLevels = _.intersectionWith(
    incomingLevels,
    stateLevels,
    (a, b) => a.price === b.price,
  );

  // remove old levels with mathing prices
  const stateWithoutIntersectingLevels = _.reject(stateLevels, stateLevel =>
    intersectingLevels.some(
      intersectingLevel => intersectingLevel.price === stateLevel.price,
    ),
  );

  const allLevels = [...stateWithoutIntersectingLevels, ...incomingLevels];
  const nonNegativeSizeLevels = allLevels.filter(level => level.size > 0);
  const orderedLevels = _.orderBy(nonNegativeSizeLevels, ['price'], ['desc']);

  // calculate total for each level
  const levelsWithTotals = orderedLevels.map((level, index) => {
    return {
      ...level,
      total: _.sum(
        getAboveItemSizes({
          isBids: LevelType.BID === type,
          itemIndex: index,
          items: nonNegativeSizeLevels,
        }),
      ),
    };
  });

  return _.take(levelsWithTotals, 20);
};
