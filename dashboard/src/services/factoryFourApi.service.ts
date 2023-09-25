import axios, { AxiosResponse } from 'axios';
import { Config } from 'config';
import FactoryFourStatusResponse from 'models/FactoryFourStatusResponse';

const {
  API: { basePath, suffixPath },
} = Config;

class FactoryFourApiService {
  // eslint-disable-next-line class-methods-use-this
  getResponse = (
    apiName: string
  ): Promise<AxiosResponse<FactoryFourStatusResponse>> =>
    axios.get<FactoryFourStatusResponse>(
      `${basePath}/${apiName}/${suffixPath}`
    );
}

export default new FactoryFourApiService();
