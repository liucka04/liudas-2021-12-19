import {ProductId} from '~/screens/Orderbook/types';

export const subscribeProductEvent = ({
  productIds,
}: {
  productIds: ProductId[];
}) => {
  return JSON.stringify({
    event: 'subscribe',
    feed: 'book_ui_1',
    product_ids: productIds,
  });
};

export const unsubscribeProductEvent = ({
  productIds,
}: {
  productIds: ProductId[];
}) => {
  return JSON.stringify({
    event: 'unsubscribe',
    feed: 'book_ui_1',
    product_ids: productIds,
  });
};
