import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'racers',

  exposes: {
    './Module': './src/remote-entry.ts',
    './Top5Racer': './src/components/Top5Racer.tsx',
  },
};

export default config;
