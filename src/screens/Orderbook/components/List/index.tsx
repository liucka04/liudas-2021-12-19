import _ from 'lodash';
import React, {FC} from 'react';
import {Box} from '~/components/Box';
import Text from '~/components/Text';
import {Level} from '../../types';

type Props = {
  items: Level[];
};

export const List: FC<Props> = ({items}) => {
  return (
    <Box>
      {items.map((item, index) => {
        const aboveItems = _.take(items, index + 1);
        const total = _.sum(aboveItems.map(aboveItem => aboveItem.size));

        return (
          <Box paddingY={1} flexDirection="row" justifyContent="space-between">
            <Box width={4 / 12} justifyContent="flex-end">
              <Text textAlign="right" fontWeight={700}>
                {item.price.toLocaleString()}
              </Text>
            </Box>
            <Box width={3 / 12} justifyContent="flex-end">
              <Text textAlign="right" fontWeight={700}>
                {item.size.toLocaleString()}
              </Text>
            </Box>
            <Box width={3 / 12} justifyContent="flex-end">
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
