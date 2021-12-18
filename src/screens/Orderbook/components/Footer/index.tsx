import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box} from '~/components/Box';
import {Button} from '~/components/Button';

export const OrderbookFooter = () => {
  const {bottom: insetBottom} = useSafeAreaInsets();
  const paddingBottom = insetBottom === 0 ? 20 : insetBottom;

  return (
    <Box backgroundColor="blue.900" pt={5} style={{paddingBottom}}>
      <Button onPress={() => {}}>Toggle Feed</Button>
    </Box>
  );
};
