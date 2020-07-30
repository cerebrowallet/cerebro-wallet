import { UserSession, AppConfig } from 'blockstack';

const appConfig = new AppConfig();

export const userSession = new UserSession({ appConfig });

export const getFile = async (fileName: string) => {
  try {
    const response = await userSession.getFile(fileName, { decrypt: true });

    return typeof response === 'string' ? JSON.parse(response) : null;
  } catch (e) {
    return null;
  }
};

export const deleteFile = async (fileName: string) =>
         userSession.deleteFile(fileName);

export const putFile = async ({
  fileName,
  file,
}: {
  fileName: string;
  file: {
    [name: string]: any;
  };
}) => {
  await userSession.putFile(fileName, JSON.stringify(file), {
    encrypt: true,
  });
};
