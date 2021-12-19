import 'react-native';
import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import {List} from '../index';
import {LevelType} from '~/providers/Orderbook/types/enums';

const props = {
  highestTotal: 10000,
  items: [
    {price: 100.5, size: 120, total: 120},
    {price: 101, size: 140, total: 260},
    {price: 101.5, size: 50, total: 310},
    {price: 102, size: 10, total: 320},
  ],
  type: LevelType.ASK,
};
let renderedList: RenderAPI;

beforeEach(() => {
  renderedList = render(<List {...props} />);
});

it('should render correct amount of items', () => {
  const {queryAllByTestId} = renderedList;
  const itemsFound = queryAllByTestId('orderbook-list-item');

  expect(itemsFound).toHaveLength(props.items.length);
});
