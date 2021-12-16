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
} from 'styled-system';

type Props = LayoutProps &
  ColorProps &
  SpaceProps &
  BackgroundProps &
  MarginProps &
  FlexboxProps &
  PaddingProps;

export const Box = emotion.View<Props>`
  ${layout}
  ${color}
  ${space}
  ${background}
  ${margin}
  ${padding}
  ${flexbox}
`;

export type StyledBoxProps = Props;
