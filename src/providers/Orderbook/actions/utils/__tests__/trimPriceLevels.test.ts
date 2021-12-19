import {RawPriceLevel} from '~/providers/Orderbook/types';
import {trimPriceLevels} from '../trimPriceLevels';

const priceLevels: RawPriceLevel[] = [
  {price: 150, size: 123},
  {price: 12312, size: 5212},
  {price: 12512, size: 124},
  {price: 123123, size: 32323},
  {price: 150, size: 123},
  {price: 12312, size: 5212},
  {price: 12512, size: 124},
  {price: 123123, size: 32323},
  {price: 150, size: 123},
  {price: 12312, size: 5212},
  {price: 12512, size: 124},
  {price: 123123, size: 32323},
  {price: 150, size: 123},
  {price: 12312, size: 5212},
  {price: 12512, size: 124},
  {price: 123123, size: 32323},
  {price: 150, size: 123},
  {price: 12312, size: 5212},
  {price: 12512, size: 124},
  {price: 123123, size: 32323},
  {price: 150, size: 123},
  {price: 12312, size: 5212},
  {price: 12512, size: 124},
  {price: 123123, size: 32323},
];

it('should trim all levels to max 20 length', () => {
  const result = trimPriceLevels({priceLevels});

  expect(result.length).toBeLessThanOrEqual(20);
});
