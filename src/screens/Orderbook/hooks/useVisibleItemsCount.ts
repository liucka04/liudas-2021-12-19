import {Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HEADER_HEIGHT = 38;
const LIST_HEADER_HEIGHT = 33;
export const SPREAD_HEIGHT = 35;
const FOOTER_HEIGHT = 75;
export const LEVEL_ITEM_HEIGHT = 32;
const NUMBER_OF_LISTS_IN_SCREEN = 2;

const {height: screenHeight} = Dimensions.get('window');

/**
 * Calculate how many items can fit in the screen responsively.
 * useLayout is render blocking and slow so I prefer calculating
 * manually if possible
 *
 * @returns {number} visibleItemsInListCount
 */
export const useVisibleItemsCount = () => {
  const {bottom: insetBottom, top: insetTop} = useSafeAreaInsets();

  const availableHeight =
    (screenHeight -
      HEADER_HEIGHT -
      LIST_HEADER_HEIGHT -
      SPREAD_HEIGHT -
      FOOTER_HEIGHT -
      insetBottom -
      insetTop) /
    NUMBER_OF_LISTS_IN_SCREEN;

  const visibleItemsInListCount = Math.floor(
    availableHeight / LEVEL_ITEM_HEIGHT,
  );

  return {visibleItemsInListCount};
};
