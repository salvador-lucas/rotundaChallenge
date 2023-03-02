export interface urlParts {
  [key: string]: string | number;
}

export enum SEPARATORS {
  PATH = '/',
  BASE_URL = '?',
  PARAMS = '&',
  KEY_VAL = '=',
}
