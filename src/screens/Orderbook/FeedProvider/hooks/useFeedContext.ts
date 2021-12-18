import {useContext} from 'react';
import {OrderFeedContext} from '../Context';

export const useFeedContext = () => {
  const context = useContext(OrderFeedContext);
  return context;
};
