import _ from 'lodash';
import {LevelType} from '~/providers/Orderbook/types/enums';
import {calculateTotalForPriceLevels} from '../calculateTotalForPriceLevels';

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

it('it should calulate totals correctly by adding sizes BOTTOM TO TOP when level type is ASK', () => {
  const expectedResult = [
    {price: 1000, size: 1000, total: 8000},
    {price: 1001, size: 1500, total: 7000},
    {price: 1002, size: 500, total: 5500},
    {price: 1003, size: 1000, total: 5000},
    {price: 1004, size: 1000, total: 4000},
    {price: 1005, size: 1500, total: 3000},
    {price: 1006, size: 500, total: 1500},
    {price: 1007, size: 1000, total: 1000},
  ];

  const result = calculateTotalForPriceLevels({
    priceLevelType: LevelType.ASK,
    priceLevels,
  });

  expect(_.isEqual(result, expectedResult)).toBeTruthy();
});

it('it should calulate totals correctly by adding sizes TOP TO BOTTOM when level type is BID', () => {
  const expectedResult = [
    {price: 1000, size: 1000, total: 1000},
    {price: 1001, size: 1500, total: 2500},
    {price: 1002, size: 500, total: 3000},
    {price: 1003, size: 1000, total: 4000},
    {price: 1004, size: 1000, total: 5000},
    {price: 1005, size: 1500, total: 6500},
    {price: 1006, size: 500, total: 7000},
    {price: 1007, size: 1000, total: 8000},
  ];

  const result = calculateTotalForPriceLevels({
    priceLevelType: LevelType.BID,
    priceLevels,
  });

  expect(_.isEqual(result, expectedResult)).toBeTruthy();
});
