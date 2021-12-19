import {Dispatch} from 'react';
import {
  ActionSetDelta,
  ActionSetLoading,
  ActionSetPausedConnection,
  ActionSetProductId,
  ActionSetSnapshot,
} from './actions';
import {ProductId} from './enums';

export type RawPriceLevel = {price: number; size: number};
export type PriceLevel = {total: number} & RawPriceLevel;

export type OrderbookActionType =
  | ActionSetSnapshot
  | ActionSetDelta
  | ActionSetLoading
  | ActionSetProductId
  | ActionSetPausedConnection;

export type OrderbookContextState = Omit<
  OrderFeedContextType,
  'dispatch' | 'socket'
>;

export type Message = {
  feed: 'book_ui_1';
  product_id: ProductId;
  bids: [number, number][];
  asks: [number, number][];
};

export type OrderFeedContextType = {
  productId: ProductId;
  asks: RawPriceLevel[] | null;
  bids: RawPriceLevel[] | null;
  isLoading: boolean;
  error: undefined;
  isConnected: boolean;
  socket?: WebSocket;
  isConnectionPaused: boolean;
  dispatch: Dispatch<OrderbookActionType>;
};
