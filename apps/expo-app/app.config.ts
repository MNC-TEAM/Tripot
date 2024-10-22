import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: config.slug || '',
  name: config.name || '',
  extra: {
    eas: {
      projectId: process.env.EAS_PROJECT_ID || '',
    },
  },
});
