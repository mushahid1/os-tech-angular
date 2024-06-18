import { Environment } from './interface';
import { Environments } from './enums';

// Firebase Secrets if use in future
// import secrets  from '../../secrets.json';

export const environment: Environment = {
  name: Environments.STAGING,
  production: false,
  baseURL: 'http://localhost/',
  showErrors: true,
};
