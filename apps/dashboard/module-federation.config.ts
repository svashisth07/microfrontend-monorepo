import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'dashboard',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
