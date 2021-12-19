import 'react-native';
import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import {OrderbookListItemGraph} from '../index';

const props = {
  total: 5000,
  highestTotal: 10000,
  isBids: true,
};

let renderedList: RenderAPI;

beforeEach(() => {
  renderedList = render(<OrderbookListItemGraph {...props} />);
});

it('should have GREEN background in first column when item type is BID', () => {
  const {getByTestId} = renderedList;

  const {backgroundColor} = getByTestId('orderbook-list-item-graph').props;
  expect(backgroundColor).toBe('green-800');
});

it('should have RED background in first column when item type is ASK', () => {
  const updatedProps = {
    ...props,
    isBids: false,
  };
  const {getByTestId} = render(<OrderbookListItemGraph {...updatedProps} />);

  const {backgroundColor} = getByTestId('orderbook-list-item-graph').props;
  expect(backgroundColor).toBe('red-800');
});

it('should should have correct width', () => {
  const {getByTestId} = renderedList;

  const {width} = getByTestId('orderbook-list-item-graph').props;

  expect(width).toBe(props.total / props.highestTotal);
});
