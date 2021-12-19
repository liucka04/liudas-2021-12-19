import _ from 'lodash';
import {RawPriceLevel} from '~/providers/Orderbook/types';
import {PriceLevelType} from '~/providers/Orderbook/types/enums';
import {getPriceLevelItemSizes} from './getPriceLevelItemSizes';

type Params = {
  priceLevels: RawPriceLevel[];
  priceLevelType: PriceLevelType;
};

export const calculateTotalForPriceLevels = ({
  priceLevels,
  priceLevelType,
}: Params) => {
  return priceLevels.map((priceLevelItem, index) => {
    return {
      ...priceLevelItem,
      total: _.sum(
        getPriceLevelItemSizes({
          items: priceLevels,
          priceLevelType,
          itemIndex: index,
        }),
      ),
    };
  });
};
