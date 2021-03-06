import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box} from '~/components/Box';
import {Button} from '~/components/Button';
import {useToggleProduct} from '~/providers/Orderbook/hooks/useToggleProduct';

export const OrderbookFooter = () => {
  const {bottom: insetBottom} = useSafeAreaInsets();
  const {toggleProduct, isLoading} = useToggleProduct();

  const paddingBottom = insetBottom === 0 ? 20 : insetBottom;

  return (
    <Box backgroundColor="blue-900" pt={5} marginX={-6} style={{paddingBottom}}>
      <Button onPress={toggleProduct} isDisabled={isLoading}>
        Toggle Feed
      </Button>
    </Box>
  );
};
