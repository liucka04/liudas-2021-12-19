import {Dispatch} from 'react';
import {Level} from '~/types';

export type OrderFeedState = Omit<OrderFeedContextType, 'dispatch'>;

export type OrderFeedContextType = {
  feedProductIds: string[];
  asks: Level[] | null;
  bids: Level[] | null;
  isLoading: boolean;
  error: undefined;
  dispatch: Dispatch<Action>;
};

export type Action =
  | {
      type: ActionType.SET_SNAPSHOT;
      snapshot: {asks: Level[]; bids: Level[]};
    }
  | {type: ActionType.SET_DELTA; delta: {asks: Level[]; bids: Level[]}};

export type Message = {
  feed: 'book_ui_1';
  product_id: ProducId;
  bids: [number, number][];
  asks: [number, number][];
};

export enum ProducId {
  XBTUSD = 'PI_XBTUSD',
  ETHUSD = 'PI_ETHUSD',
}

export enum ActionType {
  SET_SNAPSHOT = 'SET_SNAPSHOT',
  SET_DELTA = 'SET_DELTA',
}

export enum MessageFeedType {
  SNAPSHOT = 'book_ui_1_snapshot',
  DELTA = 'book_ui_1',
}

export enum LevelType {
  BID = 'BID',
  ASK = 'ASK',
}
