import React from 'react';
import { screen } from '@testing-library/react';
import { render } from 'helpers/tests.helper';
import CustomFooter from './CustomFooter';

describe('<CustomFooter />', () => {
  test('should render', () => {
    render(<CustomFooter />);

    const customFooter = screen.getByTestId('CustomFooter');

    expect(customFooter).toBeInTheDocument();
  });
});
