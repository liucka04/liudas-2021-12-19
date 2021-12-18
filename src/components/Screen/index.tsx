import React, {FC} from 'react';
import {StatusBar, StatusBarStyle} from 'react-native';
import {SafeAreaView, Edge} from 'react-native-safe-area-context';
import {Box, StyledBoxProps} from '../Box';

type Props = {
  safeAreaTop?: boolean;
  safeAreaBottom?: boolean;
  statusBarStyle?: StatusBarStyle;
} & StyledBoxProps;

const StyledSafeAreaView = Box.withComponent(SafeAreaView);

export const Screen: FC<Props> = ({
  children,
  safeAreaTop = true,
  safeAreaBottom = false,
  statusBarStyle = 'light-content',
  ...restProps
}) => {
  const safeAreaEdges: Edge[] = ['left', 'right'];

  if (safeAreaTop) {
    safeAreaEdges.push('top');
  }

  if (safeAreaBottom) {
    safeAreaEdges.push('bottom');
  }

  return (
    <>
      <StatusBar
        barStyle={statusBarStyle}
        translucent={true}
        backgroundColor="transparent"
      />
      <StyledSafeAreaView
        edges={safeAreaEdges}
        flex={1}
        paddingX={6}
        backgroundColor="blue.900"
        {...restProps}>
        {children}
      </StyledSafeAreaView>
    </>
  );
};
