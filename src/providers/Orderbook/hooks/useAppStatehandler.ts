import {useEffect, Dispatch} from 'react';
import {AppState} from 'react-native';
import {OrderbookContextState, OrderbookActionType} from '../types/index';
import {OrderbookAction} from '../types/enums';
import {unsubscribeProductEvent} from '../utils/events';

type Params = {
  state: OrderbookContextState;
  socket: WebSocket;
  dispatch: Dispatch<OrderbookActionType>;
};

export const useAppStatehandler = ({state, socket, dispatch}: Params) => {
  useEffect(() => {
    const appStateListener = AppState.addEventListener('change', appState => {
      const productIds = [state.productId];
      if (appState === 'background') {
        socket.send(
          unsubscribeProductEvent({
            productIds,
          }),
        );

        dispatch({
          type: OrderbookAction.SET_CONNECTION_PAUSED,
          isConnectionPaused: true,
        });
      }
    });

    return () => {
      appStateListener.remove();
    };
  }, [dispatch, socket, state.productId]);
};
