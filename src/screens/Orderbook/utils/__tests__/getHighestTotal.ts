import {getHighestTotal} from '../getHighestTotal';
import {asks, bids, expectedHighestTotal} from './mocks';

it('should calculate highest total value correctly', () => {
  const highestTotal = getHighestTotal({asks, bids}) ?? {};

  expect(highestTotal).toBe(expectedHighestTotal);
});
