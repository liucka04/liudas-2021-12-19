import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {Box} from '../Box';
import Text from '../Text';

type Props = {
  onPress: () => void;
};

export const Button: FC<Props> = ({onPress, children}) => {
  return (
    <Pressable onPress={onPress}>
      <Box justifyContent="center" alignItems="center">
        <Box
          backgroundColor="purple"
          borderRadius="md"
          paddingX={6}
          paddingY={2}>
          <Text fontWeight={700}>{children}</Text>
        </Box>
      </Box>
    </Pressable>
  );
};
