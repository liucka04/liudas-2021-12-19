import React, {FC} from 'react';
import {Box} from '~/components/Box';
import Text from '~/components/Text';
import {Level} from '~/providers/Orderbook/types';
import {LevelType} from '~/providers/Orderbook/types/enums';

type Props = {
  items: Level[];
  type: LevelType;
  highestTotal: number | null;
};

export const List: FC<Props> = ({items, type, highestTotal}) => {
  const isBids = type === LevelType.BID;
  const graphColor = isBids ? 'green.800' : 'red.800';
  const textColor = isBids ? 'green.500' : 'red.500';

  return (
    <Box>
      {items.map(item => {
        const {price, size, total} = item;

        return (
          <Box
            key={price.toString()}
            paddingY={1.5}
            flexDirection="row"
            justifyContent="space-between">
            {highestTotal && (
              <Box
                marginX={-6}
                left={0}
                top={0}
                bottom={0}
                position="absolute"
                width={total / highestTotal}
                backgroundColor={graphColor}
              />
            )}
            <Box width={4 / 12} justifyContent="flex-end">
              <Text textAlign="right" fontWeight={700} color={textColor}>
                {item.price.toFixed(2).toLocaleString()}
              </Text>
            </Box>
            <Box width={3 / 12} justifyContent="flex-end">
              <Text textAlign="right" fontWeight={700}>
                {size.toLocaleString()}
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
