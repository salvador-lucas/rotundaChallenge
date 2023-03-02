import { SEPARATORS, urlParts } from './types';

const urlFormat = '/:version/api/:collection/:id';
const url = '/6/api/listings/3?sort=desc&limit=10';

const urlParser = (urlFormat: string, url: string): urlParts => {
  if(!urlFormat || !url) return {};

  const urlParams = url.split(SEPARATORS.BASE_URL)[0]?.split(SEPARATORS.PATH);
  const queryParams = url.split(SEPARATORS.BASE_URL)[1];
  const paramsArray = urlFormat.split(SEPARATORS.PATH);

  const urlInfo: urlParts = {};

  for(const i in paramsArray) {
    if(paramsArray[i].indexOf(':') != -1) {
      const paramName = paramsArray[i].replace(':', '');
      const value = Number.isNaN(Number(urlParams[i])) ? urlParams[i] : parseInt(urlParams[i]);
      if(!value)
        continue;
      urlInfo[paramName] = value;
    }
  }

  if(queryParams) {
    const queryParamsArray = queryParams.split(SEPARATORS.PARAMS);

    for(const i in queryParamsArray) {
      const key = (queryParamsArray[i]).split(SEPARATORS.KEY_VAL)[0];
      const val = (queryParamsArray[i]).split(SEPARATORS.KEY_VAL)[1];
      if(!key || !val)
        continue;
      urlInfo[key] = Number.isNaN(Number(val)) ? val : parseInt(val);
    }
  }

  // console.log(urlInfo);
  return urlInfo;
};

urlParser(urlFormat, url);

export default urlParser;
