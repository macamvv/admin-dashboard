import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import {
  Card,
  CardBody,
  CardHeader,
  CardProps,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from 'reactstrap';
import Loader from 'components/Loader/Loader';
import { AxiosResponse } from 'axios';
import FactoryFourStatusResponse from 'models/FactoryFourStatusResponse';
import FactoryFourApiService from 'services/factoryFourApi.service';
import { ManipulationHelper } from 'helpers/manipulation.helper';
import { Config } from 'config';

import styles from './HealthStatusCard.module.scss';

// API data refresh time.
const { refreshTime } = Config;

interface HealthStatusCardProps extends CardProps {
  apiData: string | undefined;
}

const HealthStatusCard: React.FC<HealthStatusCardProps> = (
  healthStatusCardProps
) => {
  const { apiData, ...res } = healthStatusCardProps;
  const getNetworkError = (error: string, status: string): string => {
    return error === 'Network Error' ? '503' : status;
  };

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [healthStatusResponse, setHealthStatusResponse] =
    useState<FactoryFourStatusResponse>();

  const successMessage = healthStatusResponse?.success;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-shadow
  const getData = async (apiData: string) => {
    try {
      const response: AxiosResponse<FactoryFourStatusResponse> =
        await FactoryFourApiService.getResponse(apiData);
      setHealthStatusResponse(response.data);
    } catch (error: any) {
      const status = getNetworkError(error.message, error.response.status);
      const errorDisplay: FactoryFourStatusResponse = {
        success: false,
        message: status,
        time: Number(new Date()),
      };

      setHealthStatusResponse(errorDisplay);
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (apiData) {
      getData(apiData);
      const interval = setInterval(() => {
        getData(apiData);
      }, Number(refreshTime));

      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiData]);

  return (
    <Card
      data-testid="HealthStatusCard"
      className={classnames(
        styles.HealthStatusCard,
        successMessage ? styles.Succes : styles.Failed
      )}
      {...res}
    >
      {!isLoading ? (
        <>
          <Col className="col-12">
            <CardHeader tag="h4" className="d-inline-flex ">
              {apiData?.toUpperCase()}
            </CardHeader>
          </Col>
          <CardBody>
            <Col className="col-12">
              <CardTitle className="mb-2" tag={successMessage ? 'h5' : 'h3'}>
                {!successMessage && 'Status: '}
                {healthStatusResponse?.message}
              </CardTitle>
            </Col>
            {successMessage && (
              <Col className="col-12">
                <CardSubtitle tag="h5" className="mb-2">
                  <b>Host: </b>
                  {healthStatusResponse?.hostname}
                </CardSubtitle>
              </Col>
            )}
            {!successMessage && (
              <Col className="col-12">
                <CardSubtitle tag="h5" className={classnames('mb-2')}>
                  <i className="fas fa-exclamation-triangle" /> ATTENTION{' '}
                  <i className="fas fa-exclamation-triangle" />
                </CardSubtitle>
              </Col>
            )}
            <Col className="col-12">
              <CardText tag="h5">
                {ManipulationHelper.formatToLocalTime(
                  healthStatusResponse?.time
                )}{' '}
                <i className="fas fa-clock" />
              </CardText>
            </Col>
          </CardBody>
        </>
      ) : (
        <Loader />
      )}
    </Card>
  );
};

export default React.memo(HealthStatusCard);
