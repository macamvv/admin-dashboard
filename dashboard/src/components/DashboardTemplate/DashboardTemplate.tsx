import classnames from 'classnames';
import HealthStatusCard from 'components/HealthStatusCard/HealthStatusCard';
import React from 'react';
import apiData from 'data/apiData.json';
import { Card, CardHeader, Col, Row } from 'reactstrap';
import { useAppSelector } from 'store/hooks';
import { selectTheme } from 'store/theme/theme.slice';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import styles from './DashboardTemplate.module.scss';

const DashboardTemplate: React.FC = () => {
  const themeSelected = useAppSelector(selectTheme);
  return (
    <Card
      className={classnames(styles.DashboardTemplate, 'p-0 border-0 ')}
      data-testid="DashboardTemplate"
    >
      <div
        className={classnames(
          styles.StatusHeaderDashboard,
          `${styles.StatusHeaderDashboard} ${styles[themeSelected]}`,
          'd-flex justify-content-between'
        )}
      >
        <CardHeader
          className={classnames(
            styles.StatusHeaderDashboard,

            `${styles.StatusHeaderDashboard} ${styles[themeSelected]}`
          )}
          tag="h2"
        >
          Status Dashboard
        </CardHeader>{' '}
        <ThemeToggler />
      </div>

      <Col>
        <Row
          className={classnames(
            'd-flex m-0 ',
            styles.DashboardTemplate,
            `${styles.DashboardTemplate} ${styles[themeSelected]}`
          )}
        >
          {apiData.map((data, idx): any => {
            return (
              <Col
                key={idx}
                className={classnames(
                  'p-3 col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 justify-content-center d-flex custom-grid'
                )}
              >
                <HealthStatusCard apiData={data} />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Card>
  );
};

export default React.memo(DashboardTemplate);
