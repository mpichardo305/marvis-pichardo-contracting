let userConfig = undefined;
try {
  userConfig = await import('./v0-user-next.config');
  console.log('User config loaded:', userConfig);
} catch (e) {
  console.log('No user config found or failed to load.');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

function mergeConfig(baseConfig, userConfig) {
  if (!userConfig) {
    return baseConfig;
  }

  for (const key in userConfig) {
    if (typeof baseConfig[key] === 'object' && !Array.isArray(baseConfig[key])) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...userConfig[key],
      };
    } else {
      baseConfig[key] = userConfig[key];
    }
  }

  return baseConfig;
}

const mergedConfig = mergeConfig(nextConfig, userConfig);
export default mergedConfig;