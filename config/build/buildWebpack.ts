import { Configuration } from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): Configuration {
  const isDev = options.mode === 'development';
  const { mode, paths } = options;

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(options),
    devtool: isDev && 'inline-source-map',

    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
