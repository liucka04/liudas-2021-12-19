import {RawPriceLevel} from '~/providers/Orderbook/types';
import {OrderbookAction, ProductId} from './enums';

export type ActionSetSnapshot = {
  type: OrderbookAction.SET_SNAPSHOT;
  snapshot: {asks: RawPriceLevel[]; bids: RawPriceLevel[]};
};

export type ActionSetDelta = {
  type: OrderbookAction.SET_DELTA;
  delta: {asks: RawPriceLevel[]; bids: RawPriceLevel[]};
};

export type ActionSetLoading = {
  type: OrderbookAction.SET_LOADING;
  isLoading: boolean;
};

export type ActionSetProductId = {
  type: OrderbookAction.SET_PRODUCT_ID;
  productId: ProductId;
};

export type ActionSetPausedConnection = {
  type: OrderbookAction.SET_CONNECTION_PAUSED;
  isConnectionPaused: boolean;
};
