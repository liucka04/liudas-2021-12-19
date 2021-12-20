import {Dispatch, useCallback} from 'react';
import {OrderbookActionType} from '../types';
import {OrderbookAction} from '../types/enums';

export const useError = ({
  dispatch,
}: {
  dispatch: Dispatch<OrderbookActionType>;
}) => {
  const onError = useCallback(
    (error: WebSocketErrorEvent) => {
      dispatch({type: OrderbookAction.SET_ERROR, errorMessage: error.message});
      // Log to sentry or somewhere else
    },
    [dispatch],
  );

  return {onError};
};
