import _ from 'lodash';
import {PriceLevelType} from '~/providers/Orderbook/types/enums';
import {getPriceLevelItemSizes} from '../getPriceLevelItemSizes';

const priceLevels = [
  {price: 1000, size: 1000},
  {price: 1001, size: 1500},
  {price: 1002, size: 500},
  {price: 1003, size: 1000},
  {price: 1004, size: 1000},
  {price: 1005, size: 1500},
  {price: 1006, size: 500},
  {price: 1007, size: 1000},
];

it('should map curent(by index) and all ABOVE items size to array when level type is BID', () => {
  const expectedResult = _.take(
    priceLevels,
    _.findLastIndex(priceLevels) + 1,
  ).map(item => item.size);

  const result = getPriceLevelItemSizes({
    priceLevelType: PriceLevelType.BID,
    itemIndex: _.findLastIndex(priceLevels),
    items: priceLevels,
  });

  expect(_.isEqual(result, expectedResult)).toBeTruthy();
});

it('should map curent(by index) and all BELOW items size to array when level type is ASK', () => {
  const expectedResult = [_.last(priceLevels)?.size];

  const result = getPriceLevelItemSizes({
    priceLevelType: PriceLevelType.ASK,
    itemIndex: _.findLastIndex(priceLevels),
    items: priceLevels,
  });

  expect(_.isEqual(result, expectedResult)).toBeTruthy();
});
