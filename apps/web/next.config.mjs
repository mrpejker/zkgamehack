import TerserPlugin from 'terser-webpack-plugin';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
        ],
      },
    ];
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        o1js: path.resolve(__dirname, 'node_modules/o1js/dist/web/index.js'),
      };

      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        victory: {
          test: /o1js@1.6.0/,
          name: 'o1js',
          priority: 50,
          reuseExistingChunk: true,
        },
      };
    }

    config.experiments = { ...config.experiments, topLevelAwait: true };
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.(svg)$/i,
            type: "asset",
          },
        ],
      },    
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            minify: TerserPlugin.swcMinify,
            terserOptions: {
              sourceMap: false,
              compress: {
                keep_classnames: true,
                keep_fnames: true,
              },
              mangle: {
                keep_classnames: true,
                keep_fnames: true,
              }
            },
            exclude: /node_modules/,
          }),
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.svgoMinify,
              options: {
                plugins: [
                  "svgo",
                  {
                    plugins: [
                      {
                        name: "preset-default",
                        params: {
                          overrides: {
                            removeViewBox: false,
                            addAttributesToSVGElement: {
                              params: {
                                attributes: [
                                  { xmlns: "http://www.w3.org/2000/svg" },
                                ],
                              },
                            },
                          },
                        },
                      },
                    ]
                  }
                ]
              }
            },
          }),
        ],
      },
    };
  },
  eslint: {
    dirs: ['app', 'components', 'constants', 'containers', 'games', 'lib'],
  },
  experimental: {
    reactCompiler: true,
    optimizePackageImports: ['@zknoid/sdk', '@zknoid/games', 'zknoid-chain-dev'],
  },
  productionBrowserSourceMaps: false,
  transpilePackages: ['@zknoid/sdk', '@zknoid/games', 'zknoid-chain-dev'],
};

export default nextConfig;
