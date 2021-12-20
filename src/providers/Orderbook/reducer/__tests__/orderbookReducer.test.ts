import _ from 'lodash';
import {defaultContext} from '../../Context';
import {OrderbookContextState, RawPriceLevel} from '../../types';
import {OrderbookAction, ProductId} from '../../types/enums';
import {orderbookReducer} from '../index';

it('should handle SET_LOADING action correctly', () => {
  const isLoading = false;
  const result = orderbookReducer(defaultContext, {
    type: OrderbookAction.SET_LOADING,
    isLoading,
  });
  const expectedResult: OrderbookContextState = {...defaultContext, isLoading};

  expect(_.isEqual(expectedResult, result)).toBeTruthy();
});

it('should handle SET_ERROR action correctly', () => {
  const errorMessage = 'Something went wrong';
  const result = orderbookReducer(defaultContext, {
    type: OrderbookAction.SET_ERROR,
    errorMessage,
  });
  const expectedResult: OrderbookContextState = {
    ...defaultContext,
    errorMessage,
  };

  expect(_.isEqual(expectedResult, result)).toBeTruthy();
});

it('should handle SET_PRODUCT_ID action correctly', () => {
  const productId = ProductId.XBTUSD;

  const result = orderbookReducer(defaultContext, {
    type: OrderbookAction.SET_PRODUCT_ID,
    productId,
  });

  const expectedResult: OrderbookContextState = {...defaultContext, productId};

  expect(_.isEqual(expectedResult, result)).toBeTruthy();
});

it('should handle SET_CONNECTION_PAUSED action correctly', () => {
  const isConnectionPaused = true;

  const result = orderbookReducer(defaultContext, {
    type: OrderbookAction.SET_CONNECTION_PAUSED,
    isConnectionPaused,
  });

  const expectedResult: OrderbookContextState = {
    ...defaultContext,
    isConnectionPaused,
  };

  expect(_.isEqual(expectedResult, result)).toBeTruthy();
});

it('should handle SET_PRICE_LEVELS action correctly', () => {
  const priceLevels: {asks: RawPriceLevel[]; bids: RawPriceLevel[]} = {
    asks: [
      {price: 123, size: 12312},
      {price: 12321231, size: 12321213},
      {price: 123124, size: 21412424124},
    ],
    bids: [
      {price: 123124124, size: 124124212},
      {price: 112, size: 32},
      {price: 132312, size: 33213},
      {price: 132313312312, size: 33213},
    ],
  };

  const result = orderbookReducer(defaultContext, {
    type: OrderbookAction.SET_PRICE_LEVELS,
    priceLevels,
  });

  const expectedResult: OrderbookContextState = {
    ...defaultContext,
    asks: priceLevels.asks,
    bids: priceLevels.bids,
  };

  expect(_.isEqual(expectedResult, result)).toBeTruthy();
});
