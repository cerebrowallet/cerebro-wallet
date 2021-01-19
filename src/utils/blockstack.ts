import { UserSession, AppConfig } from '@stacks/auth';
import { Storage } from '@stacks/storage';
import { showConnect } from '@stacks/connect';

const redirectPath = '/auth-callback';
const appName = 'Cerebro Wallet';

const appConfig = new AppConfig([
  'store_write',
  'publish_data'
], undefined, redirectPath);

export const userSession = new UserSession({ appConfig });

const storage = new Storage({ userSession });

export const getFile = async (fileName: string) => {
  try {
    const response = await storage.getFile(fileName, { decrypt: true });

    return typeof response === 'string' ? JSON.parse(response) : null;
  } catch (e) {
    return null;
  }
};

export const deleteFile = async (fileName: string) =>
  storage.deleteFile(fileName);

export const putFile = async ({
  fileName,
  file,
}: {
  fileName: string;
  file: {
    [name: string]: any;
  };
}) => {
  await storage.putFile(fileName, JSON.stringify(file), {
    encrypt: true,
  });
};

export const handleSignIn = () => {
  showConnect({
    redirectTo: redirectPath,
    manifestPath: window ? window.location.origin + '/manifest.json' : undefined,
    appDetails: {
      name: appName,
      icon: window.location.origin + '/logo512.png',
    },
    finished({authResponse}){
      window.location.assign(`${redirectPath}?authResponse=${authResponse}`);
    }
  });
}
