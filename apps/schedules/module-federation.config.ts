import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'schedules',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
