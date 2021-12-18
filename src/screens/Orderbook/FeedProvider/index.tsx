import React, {FC, useEffect, useReducer, useRef, useState} from 'react';
import {Level} from '~/types';
import {throttledSetDelta} from './actions/setDelta';
import {setSnapshot} from './actions/setSnapshot';
import {defaultContext, OrderFeedContext} from './Context';
import {reducer} from './reducer';
import {Message, MessageFeedType} from '../types';

export const OrderFeedProvider: FC = ({children}) => {
  const socketRef = useRef(
    new WebSocket('wss://www.cryptofacilities.com/ws/v1'),
  );
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const {current: socket} = socketRef;

    socket.onopen = () => {
      setIsConnected(true);
      if (__DEV__) {
        console.log('[socket] connection established');
      }
    };

    socket.onclose = () => {
      setIsConnected(false);
      if (__DEV__) {
        console.log('[socket] connection closed');
      }
    };

    return () => socket.close();
  }, [dispatch]);

  const onMessage = ({data}: WebSocketMessageEvent) => {
    const messageJson: Message = JSON.parse(data);

    if (messageJson.feed === MessageFeedType.DELTA) {
      return throttledSetDelta({
        dispatch,
        message: messageJson,
        stateAsks: state.asks as Level[],
        stateBids: state.bids as Level[],
      });
    }

    if (messageJson.feed === MessageFeedType.SNAPSHOT) {
      return setSnapshot({
        dispatch,
        message: messageJson,
      });
    }
  };

  socketRef.current.onmessage = onMessage;

  return (
    <OrderFeedContext.Provider
      value={{...state, isConnected, socket: socketRef.current, dispatch}}>
      {children}
    </OrderFeedContext.Provider>
  );
};
