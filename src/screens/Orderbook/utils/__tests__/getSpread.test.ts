import {getSpread} from '../getSpread';
import {asks, bids, expectedPercentage, expectedSpreadValue} from './mocks';

it('should calculate spread value correctly', () => {
  const {percentage, value} = getSpread({asks, bids}) ?? {};

  expect(value).toBe(expectedSpreadValue);
  expect(percentage).toBe(expectedPercentage);
});
