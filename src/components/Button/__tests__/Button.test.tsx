import 'react-native';
import React from 'react';
import {render, RenderAPI, fireEvent} from '@testing-library/react-native';
import {Button} from '../index';

const props = {
  children: 'Click me',
  onPress: jest.fn(),
};
let renderedList: RenderAPI;

beforeEach(() => {
  renderedList = render(<Button {...props} />);
});

it('should render correct text', () => {
  const {getAllByText} = renderedList;
  const itemsFound = getAllByText(props.children);

  expect(itemsFound).toHaveLength(1);
});

it('should call onPress prop on click', () => {
  const {getByTestId} = renderedList;
  const button = getByTestId('button');
  fireEvent(button, 'press');

  expect(props.onPress).toHaveBeenCalledTimes(1);
});
