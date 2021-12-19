import React from 'react';
import {Box} from '~/components/Box';
import {
  LEVEL_ITEM_HEIGHT,
  useVisibleItemsCount,
} from '~/screens/Orderbook/hooks/useVisibleItemsCount';

export const ListSkeleton = () => {
  const {visibleItemsInListCount} = useVisibleItemsCount();
  return (
    <Box marginX={-6} alignItems="center" justifyContent="center">
      {[...new Array(visibleItemsInListCount)].map((_, index) => {
        return (
          <Box
            key={index.toString()}
            flexDirection="row"
            justifyContent="space-between">
            <Box
              width={4 / 12}
              height={LEVEL_ITEM_HEIGHT}
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center">
              <Box width="80%" height={20} backgroundColor="gray" />
            </Box>
            <Box
              width={3 / 12}
              height={LEVEL_ITEM_HEIGHT}
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center">
              <Box width="80%" height={20} backgroundColor="gray" />
            </Box>
            <Box
              width={3.5 / 12}
              height={LEVEL_ITEM_HEIGHT}
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center">
              <Box width="80%" height={20} backgroundColor="gray" />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
