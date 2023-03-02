export interface urlParts {
  [key: string]: string | number;
}

export enum SEPARATORS {
  PATH = '/',
  BASE_URL = '?',
  PARAMS = '&',
  KEY_VAL = '=',
}

export enum ERRORS {
  INVALID_URLS = 'Invalid url or url format provided. Invalid path params.',
  INVALID_STRINGS = 'Invalid url strings provided.',
  INVALID_QUERYPARAMS = 'Invalid url query params provided.'
}
