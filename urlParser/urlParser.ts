import { ERRORS, SEPARATORS, urlParts } from './types';

const urlParser = (urlFormat: string, url: string): urlParts => {
  if(!urlFormat || !url) return {};

  const urlParams = url.split(SEPARATORS.BASE_URL)[0]?.split(SEPARATORS.PATH);
  const queryParams = url.split(SEPARATORS.BASE_URL)[1];
  const paramsArray = urlFormat.split(SEPARATORS.PATH);

  const urlInfo: urlParts = {};

  if(urlParams.length == 1 || paramsArray.length == 1)
    throw new Error(ERRORS.INVALID_STRINGS);

  for(const i in paramsArray) {
    if(paramsArray[i].indexOf(':') != -1) {
      const paramName = paramsArray[i].replace(':', '');
      const value = Number.isNaN(Number(urlParams[i])) ? urlParams[i] : parseInt(urlParams[i]);

      if(!value)
        throw new Error(ERRORS.INVALID_URLS);

      urlInfo[paramName] = value;
    }
  }

  if(queryParams) {
    const queryParamsArray = queryParams.split(SEPARATORS.PARAMS);

    for(const i in queryParamsArray) {
      const key = (queryParamsArray[i]).split(SEPARATORS.KEY_VAL)[0];
      const val = (queryParamsArray[i]).split(SEPARATORS.KEY_VAL)[1];

      if(!key || !val)
        throw new Error(ERRORS.INVALID_QUERYPARAMS);

      urlInfo[key] = Number.isNaN(Number(val)) ? val : parseInt(val);
    }
  }
  return urlInfo;
};

export default urlParser;
