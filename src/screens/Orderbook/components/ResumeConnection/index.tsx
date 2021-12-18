import React from 'react';
import {Box} from '~/components/Box';
import {Button} from '~/components/Button';
import Text from '~/components/Text';
import {useFeedContext} from '../../FeedProvider/hooks/useFeedContext';
import {useSubscribeProduct} from '../../FeedProvider/hooks/useSubscribeProduct';
import {ActionType} from '../../types';

export const ResumeConnection = () => {
  const {dispatch, productId, isConnectionPaused} = useFeedContext();
  const {subscribeProduct} = useSubscribeProduct();

  const onPress = () => {
    subscribeProduct({productId});
    dispatch({
      type: ActionType.SET_CONNECTION_PAUSED,
      isConnectionPaused: false,
    });
  };

  if (!isConnectionPaused) {
    return null;
  }

  return (
    <Box
      top={0}
      left={0}
      right={0}
      bottom={0}
      position="absolute"
      justifyContent="center"
      alignItems="center"
      backgroundColor="black-transparent-85"
      paddingX={16}>
      <Text marginBottom={3} fontWeight={500} textAlign="center">
        Your connection has been paused due to inactivity
      </Text>
      <Button onPress={onPress}>Resume</Button>
    </Box>
  );
};
