import React from 'react';
import { screen } from '@testing-library/react';
import { render } from 'helpers/tests.helper';
import ThemeToggler from './ThemeToggler';

describe('<ThemeToggler />', () => {
  test('should render', () => {
    render(<ThemeToggler />);

    const themeToggler = screen.getByTestId('ThemeToggler');

    expect(themeToggler).toBeInTheDocument();
  });
});
