import _ from 'lodash';
import React, {FC} from 'react';
import {Box} from '~/components/Box';
import {Level} from '~/providers/Orderbook/types';
import {LevelType} from '~/providers/Orderbook/types/enums';
import {useVisibleItemsCount} from './hooks/useVisibleItemsCount';
import {OrderbookListItem} from './Item';

type Props = {
  items: Level[];
  type: LevelType;
  highestTotal: number;
};

export const List: FC<Props> = ({items, type, highestTotal}) => {
  const {visibleItemsInListCount} = useVisibleItemsCount();

  return (
    <Box marginX={-6}>
      {_.take(items, visibleItemsInListCount).map(item => (
        <OrderbookListItem
          key={item.price}
          highestTotal={highestTotal}
          levelType={type}
          priceLevel={item}
        />
      ))}
    </Box>
  );
};
