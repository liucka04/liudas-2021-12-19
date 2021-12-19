import _ from 'lodash';
import {mapLevels} from '../mapLevels';

const priceLevels: [number, number][] = [
  [150, 123],
  [12312, 5212],
  [12512, 124],
  [123123, 32323],
];

const expectedResult = [
  {price: 150, size: 123},
  {price: 12312, size: 5212},
  {price: 12512, size: 124},
  {price: 123123, size: 32323},
];

it('should correctly map data', () => {
  const result = mapLevels({levels: priceLevels});
  expect(_.isEqual(result, expectedResult)).toBeTruthy();
});
