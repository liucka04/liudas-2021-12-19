import _ from 'lodash';
import {Level} from '~/types';

type Params = {
  stateLevels: Level[];
  incomingLevels: Level[];
};

export const mergeLevels = ({stateLevels, incomingLevels}: Params) => {
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

  return _.take(_.orderBy(nonNegativeSizeLevels, ['price'], ['desc']), 10);
};
