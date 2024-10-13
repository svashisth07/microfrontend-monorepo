import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shop',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (libraryName, sharedConfig) => {
    if (libraryName === 'react-router-dom') {
      return false;
    }
    console.log('sharedConfig', sharedConfig);
    return sharedConfig;
  },
};

export default config;
