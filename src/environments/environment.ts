import { weatherapi } from './weatherapi.environment';

export const environment = {
  production: false,
  ...weatherapi,
};
