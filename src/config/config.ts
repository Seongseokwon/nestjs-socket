import { readFileSync } from 'fs';
import * as yml from 'js-yaml';
import { join } from 'path';

const YML_CONFIG_LOCAL = 'local-development.yml';
const YML_CONFIG_DEVELOPMENT = 'development.yml';
const YML_CONFIG_PRODUCTION = 'production.yml';

const config = {
  local: YML_CONFIG_LOCAL,
  development: YML_CONFIG_DEVELOPMENT,
  production: YML_CONFIG_PRODUCTION,
};

export default () => {
  return yml.load(
    readFileSync(join(__dirname, config[process.env.NODE_ENV]), 'utf8'),
  ) as Record<string, any>;
};
