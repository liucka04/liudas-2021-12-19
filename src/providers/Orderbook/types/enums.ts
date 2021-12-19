export enum OrderbookAction {
  SET_PRICE_LEVELS = 'SET_PRICE_LEVELS',
  SET_ASKS = 'SET_ASKS',
  SET_BIDS = 'SET_BIDS',
  SET_LOADING = 'SET_LOADING',
  SET_PRODUCT_ID = 'SET_PRODUCT_ID',
  SET_CONNECTION_PAUSED = 'SET_CONNECTION_PAUSED',
}

export enum ProductId {
  XBTUSD = 'PI_XBTUSD',
  ETHUSD = 'PI_ETHUSD',
}

export enum MessageFeedType {
  SNAPSHOT = 'book_ui_1_snapshot',
  DELTA = 'book_ui_1',
}

export enum PriceLevelType {
  BID = 'BID',
  ASK = 'ASK',
}
