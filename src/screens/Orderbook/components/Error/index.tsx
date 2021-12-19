import React, {FC} from 'react';
import {Box} from '~/components/Box';
import Text from '~/components/Text';

type Props = {
  errorMessage?: string;
};

export const Error: FC<Props> = ({errorMessage = 'Something went wrong'}) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>{errorMessage}</Text>
    </Box>
  );
};
