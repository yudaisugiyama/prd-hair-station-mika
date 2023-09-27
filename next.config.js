/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = nextConfig

module.exports = {
  generateBuildId: () => 'no-cache-build', // ビルドIDを固定値にする
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // キャッシュを無効化する
      config.module.rules.forEach((rule) => {
        if (rule.loader === 'next-babel-loader') {
          rule.options.cacheDirectory = false;
        }
      });
    }
    return config;
  },
};

