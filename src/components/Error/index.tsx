import React, {FC} from 'react';
import {Box} from '~/components/Box';
import Text from '~/components/Text';
import {Button} from '../Button';
import {Screen} from '../Screen';

type Props = {
  onRefresh: () => void;
  errorMessage?: string;
};

export const Error: FC<Props> = ({
  onRefresh,
  errorMessage = 'Something went wrong',
}) => {
  return (
    <Screen>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text marginBottom={3}>{errorMessage}</Text>
        <Box alignItems="center">
          {onRefresh && <Button onPress={onRefresh}>Refresh</Button>}
        </Box>
      </Box>
    </Screen>
  );
};
