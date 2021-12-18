import {Dispatch} from 'react';
import {Level} from '~/types';

export type OrderFeedState = Omit<OrderFeedContextType, 'dispatch' | 'socket'>;

export type OrderFeedContextType = {
  productId: ProductId;
  asks: Level[] | null;
  bids: Level[] | null;
  isLoading: boolean;
  error: undefined;
  isConnected: boolean;
  socket?: WebSocket;
  isConnectionPaused: boolean;
  dispatch: Dispatch<Action>;
};

export type Action =
  | {
      type: ActionType.SET_SNAPSHOT;
      snapshot: {asks: Level[]; bids: Level[]};
    }
  | {type: ActionType.SET_DELTA; delta: {asks: Level[]; bids: Level[]}}
  | {type: ActionType.SET_LOADING; isLoading: boolean}
  | {type: ActionType.SET_PRODUCT_ID; productId: ProductId}
  | {type: ActionType.SET_CONNECTION_PAUSED; isConnectionPaused: boolean};

export type Message = {
  feed: 'book_ui_1';
  product_id: ProductId;
  bids: [number, number][];
  asks: [number, number][];
};

export enum ProductId {
  XBTUSD = 'PI_XBTUSD',
  ETHUSD = 'PI_ETHUSD',
}

export enum ActionType {
  SET_SNAPSHOT = 'SET_SNAPSHOT',
  SET_DELTA = 'SET_DELTA',
  SET_LOADING = 'SET_LOADING',
  SET_PRODUCT_ID = 'SET_PRODUCT_ID',
  SET_CONNECTION_PAUSED = 'SET_CONNECTION_PAUSED',
}

export enum MessageFeedType {
  SNAPSHOT = 'book_ui_1_snapshot',
  DELTA = 'book_ui_1',
}

export enum LevelType {
  BID = 'BID',
  ASK = 'ASK',
}
