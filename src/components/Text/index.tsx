import React, {FC} from 'react';
import {TextProps} from 'react-native';
import {StyledText, StyledTextProps} from './StyledText';

type Props = {} & StyledTextProps & TextProps;

const Text: FC<Props> = ({
  color = 'white',
  fontSize = 'md',
  children,
  ...rest
}) => {
  return (
    <StyledText color={color} fontSize={fontSize} {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
