import {useContext} from 'react';
import {OrderFeedContext} from '../Context';

export const useOrderbookContext = () => {
  const context = useContext(OrderFeedContext);
  return context;
};
