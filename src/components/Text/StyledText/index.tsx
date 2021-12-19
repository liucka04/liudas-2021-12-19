import emotion from '@emotion/native';
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  textStyle,
  TextStyleProps,
  typography,
  TypographyProps,
} from 'styled-system';
import {DefaultTheme} from '~/themes/default';
import {fontWeight} from './utils/fontWeight';

type Props = ColorProps<DefaultTheme> &
  TypographyProps<DefaultTheme> &
  FontWeightProps<DefaultTheme> &
  SpaceProps<DefaultTheme> &
  TextAlignProps<DefaultTheme> &
  TextStyleProps<DefaultTheme> &
  FontSizeProps &
  LineHeightProps<DefaultTheme>;

export const StyledText = emotion.Text<Props>`
  ${color}
  ${typography}
  ${fontWeight}
  ${space}
  ${textAlign}
  ${lineHeight}
  ${textStyle}
  ${fontSize}
`;

export type StyledTextProps = Props;
