import {useCallback, useRef} from 'react';
import {Message, MessageQueue} from '../types';

export const useMessageQueue = () => {
  const messageQueueRef = useRef<MessageQueue>({asks: [], bids: []});

  const appendQueue = useCallback(({message}: {message: Message}) => {
    const {asks: queuedAsks, bids: queuedBids} = messageQueueRef.current;

    messageQueueRef.current = {
      asks: [
        ...queuedAsks,
        ...(message.asks === undefined ? [] : message.asks),
      ],
      bids: [
        ...queuedBids,
        ...(message.bids === undefined ? [] : message.bids),
      ],
    };
  }, []);

  return {messageQueueRef, appendQueue};
};
