import React from 'react';
import { screen } from '@testing-library/react';
import { render } from 'helpers/tests.helper';
import DashboardTemplate from './DashboardTemplate';

describe('<DashboardTemplate />', () => {
  test('should render', () => {
    render(<DashboardTemplate />);

    const dashboardTemplate = screen.getByTestId('DashboardTemplate');

    expect(dashboardTemplate).toBeInTheDocument();
  });
});
