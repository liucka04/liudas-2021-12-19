import _ from 'lodash';
import {RawPriceLevel} from '../../types';

export const trimPriceLevels = ({
  priceLevels,
}: {
  priceLevels: RawPriceLevel[];
}) => _.take(priceLevels, 20);
