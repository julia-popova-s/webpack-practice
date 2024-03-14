export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
}

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  analyzer?: boolean;
  mode: BuildMode;
}
