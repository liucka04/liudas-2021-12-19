import {Dispatch} from 'react';
import {
  ActionSetPriceLevels,
  ActionSetLoading,
  ActionSetPausedConnection,
  ActionSetProductId,
  ActionSetBids,
  ActionSetAsks,
  ActionSetError,
} from './actions';
import {ProductId} from './enums';

export type RawPriceLevel = {price: number; size: number};
export type PriceLevel = {total: number} & RawPriceLevel;

export type OrderbookActionType =
  | ActionSetPriceLevels
  | ActionSetBids
  | ActionSetAsks
  | ActionSetLoading
  | ActionSetError
  | ActionSetProductId
  | ActionSetPausedConnection;

export type OrderbookContextState = Omit<
  OrderbookContextType,
  'dispatch' | 'socket'
>;

export type MessageQueue = {
  asks: [number, number][];
  bids: [number, number][];
};

export type Message = {
  feed: 'book_ui_1';
  product_id: ProductId;
  bids: [number, number][];
  asks: [number, number][];
};

export type OrderbookContextType = {
  productId: ProductId;
  asks: RawPriceLevel[] | null;
  bids: RawPriceLevel[] | null;
  isLoading: boolean;
  errorMessage?: string;
  isConnected: boolean;
  socket?: WebSocket;
  isConnectionPaused: boolean;
  dispatch: Dispatch<OrderbookActionType>;
};

export type Error = {};
