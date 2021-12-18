import React from 'react';
import {Box} from '~/components/Box';
import Text from '~/components/Text';

export const Error = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>Something went wrong</Text>
    </Box>
  );
};
