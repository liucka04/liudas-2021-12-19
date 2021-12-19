import {PriceLevel} from '~/providers/Orderbook/types';

export const asks: PriceLevel[] = [
  {price: 2000, size: 12412, total: 1000},
  {price: 1000, size: 1412312, total: 2222},
  {price: 500, size: 12312, total: 3333},
];

export const bids: PriceLevel[] = [
  {price: 2050.5, size: 33213, total: 4444},
  {price: 1900, size: 124124212, total: 5555},
  {price: 1000, size: 33213, total: 6666},
  {price: 300, size: 32, total: 7777},
];

export const expectedSpreadValue = '50.5';
export const expectedPercentage = '2.46';
export const expectedHighestTotal = 7777;
