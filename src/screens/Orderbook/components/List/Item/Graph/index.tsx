import React, {FC} from 'react';
import {Box} from '~/components/Box';

type Props = {
  total: number;
  highestTotal: number;
  isBids: boolean;
};

export const OrderbookListItemGraph: FC<Props> = ({
  total,
  highestTotal,
  isBids,
}) => {
  const graphColor = isBids ? 'green.800' : 'red.800';

  return (
    <Box
      left={0}
      top={0}
      bottom={0}
      right={0}
      position="absolute"
      width={total / highestTotal}
      backgroundColor={graphColor}
    />
  );
};
