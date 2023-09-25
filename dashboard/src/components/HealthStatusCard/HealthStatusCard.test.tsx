import React from 'react';
import { screen } from '@testing-library/react';
import { render } from 'helpers/tests.helper';
import HealthStatusCard from './HealthStatusCard';

describe('<HealthStatusCard />', () => {
  test('should render', () => {
    render(<HealthStatusCard apiData="accounts" />);

    const healthStatusCard = screen.getByTestId('HealthStatusCard');

    expect(healthStatusCard).toBeInTheDocument();
  });
});
