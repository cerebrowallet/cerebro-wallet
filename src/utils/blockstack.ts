import { UserSession, AppConfig } from 'blockstack';

const appConfig = new AppConfig(undefined, undefined, '/auth-callback');

export const userSession = new UserSession({ appConfig });
