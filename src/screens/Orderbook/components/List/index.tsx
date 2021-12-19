import React, {FC} from 'react';
import {Box} from '~/components/Box';
import {PriceLevel} from '~/providers/Orderbook/types';
import {PriceLevelType} from '~/providers/Orderbook/types/enums';
import {OrderbookListItem} from './Item';

type Props = {
  items: PriceLevel[];
  type: PriceLevelType;
  highestTotal: number;
};

export const List: FC<Props> = ({items, type, highestTotal}) => {
  return (
    <Box marginX={-6}>
      {items.map(item => {
        return (
          <OrderbookListItem
            key={item.price}
            highestTotal={highestTotal}
            levelType={type}
            priceLevel={item}
          />
        );
      })}
    </Box>
  );
};
