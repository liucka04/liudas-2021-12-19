import React, {FC, useReducer, useRef, useState} from 'react';
import {defaultContext, OrderbookContext} from './Context';
import {orderbookReducer} from './reducer';
import {useConnection} from './hooks/useConnection';
import {useMessages} from './hooks/useMessages';
import {useAppStatehandler} from './hooks/useAppStatehandler';

export const OrderbookProvider: FC = ({children}) => {
  const socketRef = useRef(
    new WebSocket('wss://www.cryptofacilities.com/ws/v1'),
  );
  const [state, dispatch] = useReducer(orderbookReducer, defaultContext);
  const [isConnected, setIsConnected] = useState(false);
  const {onMessage} = useMessages({dispatch, state});

  useAppStatehandler({dispatch, socket: socketRef.current, state});
  useConnection({setIsConnected, socketRef});

  socketRef.current.onmessage = onMessage;

  return (
    <OrderbookContext.Provider
      value={{...state, isConnected, socket: socketRef.current, dispatch}}>
      {children}
    </OrderbookContext.Provider>
  );
};
