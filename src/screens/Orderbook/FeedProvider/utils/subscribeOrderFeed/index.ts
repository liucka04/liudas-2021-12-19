import {ProducId} from '~/screens/Orderbook/types';

type Params = {socket: WebSocket};

export const subscribeOrderFeed = ({socket}: Params) => {
  const eventData = {
    event: 'subscribe',
    feed: 'book_ui_1',
    product_ids: [ProducId.XBTUSD],
  };

  socket.send(JSON.stringify(eventData));
};
