import {Dispatch, MutableRefObject, SetStateAction, useEffect} from 'react';

export const useConnection = ({
  socketRef,
  setIsConnected,
}: {
  socketRef: MutableRefObject<WebSocket>;
  setIsConnected: Dispatch<SetStateAction<boolean>>;
}) => {
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
  }, [setIsConnected, socketRef]);
};
