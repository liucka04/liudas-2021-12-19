import {DefaultTheme} from '@react-navigation/native';
import {system} from 'styled-system';

const fontWeight = system({
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',
    transform: (value: FontWeights['fontWeights']) => value?.toString(),
  },
});

export {fontWeight};
