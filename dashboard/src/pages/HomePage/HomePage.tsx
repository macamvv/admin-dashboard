import DashboardTemplate from 'components/DashboardTemplate/DashboardTemplate';
import React from 'react';
import styles from './HomePage.module.scss';

const HomePage = (): JSX.Element => {
  return (
    <div className={styles.HomePage} data-testid="HomePage">
      <DashboardTemplate />
    </div>
  );
};

export default HomePage;
