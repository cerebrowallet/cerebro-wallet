import { UserSession, AppConfig } from 'blockstack';

const appConfig = new AppConfig(undefined, undefined, '/auth-callback');

export const userSession = new UserSession({ appConfig });

export const getFile = async (fileName: string) => {
  try {
    const response = await userSession.getFile(fileName, { decrypt: true });

    if (typeof response === 'string') {
      return JSON.parse(response);
    }

    return response;
  } catch (e) {
    // TODO log error
    return null;
  }
};

export const putFile = async ({
  fileName,
  file,
}: {
  fileName: string;
  file: {
    [name: string]: any;
  };
}) => {
  try {
    await userSession.putFile(fileName, JSON.stringify(file), {
      encrypt: true,
    });
  } catch (e) {
    console.error(e);
  }
};
