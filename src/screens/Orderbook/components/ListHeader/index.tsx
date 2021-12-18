import React from 'react';
import {Box} from '~/components/Box';
import Text from '~/components/Text';

export const OrderbookListHeader = () => {
  return (
    <Box flexGrow={0}>
      <Box paddingY={1} flexDirection="row" justifyContent="space-between">
        <Box width={4 / 12} justifyContent="flex-end">
          <Text textAlign="right" fontSize="lg" fontWeight={700} color="gray">
            Price
          </Text>
        </Box>
        <Box width={3 / 12} justifyContent="flex-end">
          <Text textAlign="right" fontSize="lg" fontWeight={700} color="gray">
            Size
          </Text>
        </Box>
        <Box width={3 / 12} justifyContent="flex-end">
          <Text textAlign="right" fontSize="lg" fontWeight={700} color="gray">
            Total
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
