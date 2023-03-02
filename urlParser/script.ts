import urlParser from './urlParser';

const urlFormat = '/:version/api/:collection/:id';
const url = '/6/api/listings/3?sort=desc&limit=10';
const urlWithoutQueryParams = '/6/api/listing/3';

const res = urlParser(urlFormat, url);
const resWithoutQP = urlParser(urlFormat, urlWithoutQueryParams);

console.log('Parsed URL: ', res);
console.log('Parsed URL without query params: ', resWithoutQP);
