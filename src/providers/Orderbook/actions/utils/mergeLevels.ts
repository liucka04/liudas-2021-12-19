import _ from 'lodash';
import {Level} from '../../types';

type Params = {
  stateLevels: Level[];
  incomingLevels: Level[];
};

export const mergeLevels = ({stateLevels, incomingLevels}: Params) => {
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

  // limit levels list size to 20 so it doesn't get bloated
  return _.take(orderedLevels, 20);
};
