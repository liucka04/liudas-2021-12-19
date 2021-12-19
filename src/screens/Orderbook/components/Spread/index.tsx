import React, {FC} from 'react';
import {Box} from '~/components/Box';
import Text from '~/components/Text';

type Props = {
  spread: {value: string; percentage: string} | null;
};

export const OrderbookSpread: FC<Props> = ({spread}) => {
  const {value, percentage} = spread ?? {};

  return (
    <Box paddingY={2} alignItems="center">
      <Text color="gray" fontWeight={500}>
        Spread: {value} ({percentage}%)
      </Text>
    </Box>
  );
};
