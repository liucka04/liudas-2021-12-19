import React, {FC, useEffect, useReducer} from 'react';
import {MessageFeedType} from '../types';
import {throttledSetDelta} from './actions/setDelta';
import {setSnapshot} from './actions/setSnapshot';
import {defaultContext, OrderFeedContext} from './Context';
import {reducer} from './reducer';
import {subscribeOrderFeed} from './utils/subscribeOrderFeed';

let socket: WebSocket | null;

export const OrderFeedProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  useEffect(() => {
    socket = new WebSocket('wss://www.cryptofacilities.com/ws/v1');

    if (socket === null) {
      return;
    }

    socket.onopen = () => {
      console.log('socket established');
      if (!socket) {
        return;
      }
      subscribeOrderFeed({socket});
    };

    socket.addEventListener('error', event => {
      console.log('socket error: ', event);
    });

    socket.onmessage = ({data}) => {
      const message = JSON.parse(data);

      if (message.feed === MessageFeedType.DELTA) {
        return throttledSetDelta({dispatch, orderFeed: message});
      }

      if (message.feed === MessageFeedType.SNAPSHOT) {
        return setSnapshot({dispatch, orderFeed: message});
      }
    };
  }, []);

  return (
    <OrderFeedContext.Provider value={{...state, dispatch}}>
      {children}
    </OrderFeedContext.Provider>
  );
};
