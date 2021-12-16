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
} from 'styled-system';

type Props = LayoutProps &
  ColorProps &
  SpaceProps &
  BackgroundProps &
  MarginProps &
  PaddingProps;

export const Box = emotion.View<Props>`
  ${layout}
  ${color}
  ${space}
  ${background}
  ${margin}
  ${padding}
`;

export type BoxProps = Props;
