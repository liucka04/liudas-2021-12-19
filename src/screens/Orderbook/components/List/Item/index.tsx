import React, {FC} from 'react';
import {Box} from '~/components/Box';
import Text from '~/components/Text';
import {Level} from '~/providers/Orderbook/types';
import {LevelType} from '~/providers/Orderbook/types/enums';
import {OrderbookListItemGraph} from './Graph';
import {formatPrice} from './utils/formatPrice';

type Props = {
  priceLevel: Level;
  highestTotal: number;
  levelType: LevelType;
};

export const OrderbookListItem: FC<Props> = ({
  priceLevel,
  highestTotal,
  levelType,
}) => {
  const {price, size, total} = priceLevel;

  const isBids = levelType === LevelType.BID;
  const textColor = isBids ? 'green' : 'red';

  return (
    <Box paddingY={1.5} testID="orderbook-list-item">
      <OrderbookListItemGraph
        highestTotal={highestTotal}
        total={total}
        isBids={isBids}
      />
      <Box flexDirection="row" justifyContent="space-between" paddingX={6}>
        <Box width={4 / 12} justifyContent="flex-end">
          <Text textAlign="right" fontWeight={700} color={textColor}>
            {formatPrice({price})}
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
    </Box>
  );
};
