import {RawPriceLevel} from '~/providers/Orderbook/types';
import {OrderbookAction, ProductId} from './enums';

export type ActionSetPriceLevels = {
  type: OrderbookAction.SET_PRICE_LEVELS;
  priceLevels: {asks: RawPriceLevel[]; bids: RawPriceLevel[]};
};

export type ActionSetAsks = {
  type: OrderbookAction.SET_ASKS;
  asks: RawPriceLevel[];
};

export type ActionSetBids = {
  type: OrderbookAction.SET_BIDS;
  bids: RawPriceLevel[];
};

export type ActionSetLoading = {
  type: OrderbookAction.SET_LOADING;
  isLoading: boolean;
};

export type ActionSetError = {
  type: OrderbookAction.SET_ERROR;
  errorMessage?: string;
};

export type ActionSetProductId = {
  type: OrderbookAction.SET_PRODUCT_ID;
  productId: ProductId;
};

export type ActionSetPausedConnection = {
  type: OrderbookAction.SET_CONNECTION_PAUSED;
  isConnectionPaused: boolean;
};
