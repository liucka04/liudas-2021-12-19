import emotion from '@emotion/native';
import {
  background,
  BackgroundProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  BorderProps,
  border,
  position,
  PositionProps,
} from 'styled-system';
import {DefaultTheme} from '~/themes/default';

type Props = LayoutProps<DefaultTheme> &
  ColorProps<DefaultTheme> &
  SpaceProps<DefaultTheme> &
  BackgroundProps<DefaultTheme> &
  MarginProps<DefaultTheme> &
  FlexboxProps<DefaultTheme> &
  BorderProps<DefaultTheme> &
  PositionProps &
  PaddingProps<DefaultTheme>;

export const Box = emotion.View<Props>`
  ${layout}
  ${color}
  ${space}
  ${background}
  ${margin}
  ${padding}
  ${flexbox}
  ${border}
  ${position}
`;

export type StyledBoxProps = Props;
