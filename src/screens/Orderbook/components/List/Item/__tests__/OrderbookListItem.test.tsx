import 'react-native';
import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import {OrderbookListItem} from '../index';
import {PriceLevelType} from '~/providers/Orderbook/types/enums';
import {formatPrice} from '../utils/formatPrice';

const props = {
  priceLevel: {price: 100.5, size: 3222, total: 14124124},
  highestTotal: 10000,
  levelType: PriceLevelType.BID,
};

let renderedList: RenderAPI;

beforeEach(() => {
  renderedList = render(<OrderbookListItem {...props} />);
});

it('should have GREEN text in first column when item type is BID', () => {
  const {getByText} = renderedList;
  const item = getByText(formatPrice({price: props.priceLevel.price}));

  expect(item.props.color).toBe('green');
});

it('should have RED text in first column when item type is ASK', () => {
  const updatedProps = {
    ...props,
    levelType: PriceLevelType.ASK,
  };
  const {getByText} = render(<OrderbookListItem {...updatedProps} />);
  const item = getByText(formatPrice({price: props.priceLevel.price}));

  expect(item.props.color).toBe('red');
});

it('should render price, size and total', () => {
  const {getAllByText} = renderedList;
  const {price, size, total} = props.priceLevel;

  expect(getAllByText(size.toLocaleString())).toHaveLength(1);
  expect(getAllByText(formatPrice({price}))).toHaveLength(1);
  expect(getAllByText(total.toLocaleString())).toHaveLength(1);
});
