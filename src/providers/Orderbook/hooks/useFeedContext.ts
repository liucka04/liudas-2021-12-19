import {useContext} from 'react';
import {OrderbookContext} from '../Context';

export const useOrderbookContext = () => {
  const context = useContext(OrderbookContext);
  return context;
};
