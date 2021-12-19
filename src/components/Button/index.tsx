import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {Box} from '../Box';
import Text from '../Text';

type Props = {
  onPress: () => void;
  isDisabled?: boolean;
};

export const Button: FC<Props> = ({onPress, isDisabled, children}) => {
  return (
    <Pressable onPress={isDisabled ? undefined : onPress} testID="button">
      <Box
        justifyContent="center"
        alignItems="center"
        opacity={isDisabled ? 0.5 : 1}>
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
