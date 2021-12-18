import _ from 'lodash';
import React, {FC} from 'react';
import {Box} from '~/components/Box';
import Text from '~/components/Text';
import {Level} from '~/types';
import {getAboveItemSizes} from './utils/getAboveItemSizes';

type Props = {
  items: Level[];
  type: 'asks' | 'bids';
};

export const List: FC<Props> = ({items, type}) => {
  const isBids = type === 'bids';

  return (
    <Box>
      {items.map((item, index) => {
        const total = _.sum(
          getAboveItemSizes({isBids, itemIndex: index, items}),
        );

        return (
          <Box
            key={item.price.toString()}
            paddingY={1.5}
            flexDirection="row"
            justifyContent="space-between">
            <Box width={4 / 12} justifyContent="flex-end">
              <Text
                textAlign="right"
                fontWeight={700}
                color={isBids ? 'green.500' : 'red.500'}>
                {item.price.toFixed(2).toLocaleString()}
              </Text>
            </Box>
            <Box width={3 / 12} justifyContent="flex-end">
              <Text textAlign="right" fontWeight={700}>
                {item.size.toLocaleString()}
              </Text>
            </Box>
            <Box width={3.5 / 12} justifyContent="flex-end">
              <Text textAlign="right" fontWeight={700}>
                {total.toLocaleString()}
              </Text>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
