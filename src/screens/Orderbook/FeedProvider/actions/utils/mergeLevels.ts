import _ from 'lodash';
import {LevelType} from '~/screens/Orderbook/types';
import {Level} from '~/types';
import {getAboveItemSizes} from './getAboveItemSizes';

type Params = {
  stateLevels: Level[];
  incomingLevels: Level[];
  type: LevelType;
};

export const mergeLevels = ({stateLevels, incomingLevels, type}: Params) => {
  const intersectingLevels = _.intersectionWith(
    incomingLevels,
    stateLevels,
    (a, b) => a.price === b.price,
  );

  const stateWithoutIntersectingLevels = _.reject(stateLevels, stateLevel =>
    intersectingLevels.some(
      intersectingLevel => intersectingLevel.price === stateLevel.price,
    ),
  );

  const allLevels = [...stateWithoutIntersectingLevels, ...incomingLevels];
  const nonNegativeSizeLevels = allLevels.filter(level => level.size > 0);
  const levelsWithTotals = nonNegativeSizeLevels.map((level, index) => {
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

  return _.take(_.orderBy(levelsWithTotals, ['price'], ['desc']), 8);
};
