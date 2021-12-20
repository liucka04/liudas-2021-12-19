import {getSpread} from '../getSpread';
import {asks, bids, expectedPercentage, expectedSpreadValue} from '../mocks';

it('should calculate spread value correctly', () => {
  const {percentage, value} = getSpread({asks, bids}) ?? {};
  console.log('🚀 ~ file: getSpread.test.ts ~ line 6 ~ it ~ value', value);
  console.log(
    '🚀 ~ file: getSpread.test.ts ~ line 6 ~ it ~ percentage',
    percentage,
  );

  expect(value).toBe(expectedSpreadValue);
  expect(percentage).toBe(expectedPercentage);
});
