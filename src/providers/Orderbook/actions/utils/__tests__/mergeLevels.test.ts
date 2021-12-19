import _ from 'lodash';
import {RawPriceLevel} from '~/providers/Orderbook/types';
import {mergePriceLevels} from '../mergePriceLevels';

const stateLevels = [
  {price: 150, size: 123},
  {price: 12312, size: 5212},
  {price: 12512, size: 124},
  {price: 123123, size: 32323},
];

const incomingLevels: RawPriceLevel[] = [
  {price: 150, size: 2000},
  {price: 12412, size: 0},
  {price: 999, size: 1000},
];

const expectedResult = [
  {price: 123123, size: 32323},
  {price: 12512, size: 124},
  {price: 12312, size: 5212},
  {price: 999, size: 1000},
  {price: 150, size: 2000},
];

it('should replace state levels with incoming levels if price matches, sort DESC and remove levels with size of 0', () => {
  const result = mergePriceLevels({incomingLevels, stateLevels: stateLevels});

  expect(_.isEqual(result, expectedResult)).toBeTruthy();
});
