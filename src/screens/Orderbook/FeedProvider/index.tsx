import React, {FC, useEffect, useReducer, useRef, useState} from 'react';
import {AppState} from 'react-native';
import {defaultContext, OrderFeedContext} from './Context';
import {reducer} from './reducer';
import {ActionType} from '../types';
import {unsubscribeProductEvent} from './utils/events';
import {useConnection} from './hooks/useConnection';
import {useMessages} from './hooks/useMessages';

export const OrderFeedProvider: FC = ({children}) => {
  const socketRef = useRef(
    new WebSocket('wss://www.cryptofacilities.com/ws/v1'),
  );
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const [isConnected, setIsConnected] = useState(false);
  const {onMessage} = useMessages({dispatch, state});

  useConnection({setIsConnected, socketRef});

  useEffect(() => {
    const appStateListener = AppState.addEventListener('change', appState => {
      const productIds = [state.productId];
      if (appState === 'background') {
        socketRef.current.send(
          unsubscribeProductEvent({
            productIds,
          }),
        );

        dispatch({
          type: ActionType.SET_CONNECTION_PAUSED,
          isConnectionPaused: true,
        });
      }
    });

    return () => {
      appStateListener.remove();
    };
  }, [state.productId]);

  socketRef.current.onmessage = onMessage;

  return (
    <OrderFeedContext.Provider
      value={{...state, isConnected, socket: socketRef.current, dispatch}}>
      {children}
    </OrderFeedContext.Provider>
  );
};
