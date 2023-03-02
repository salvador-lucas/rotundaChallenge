import { describe, expect, test } from '@jest/globals';
import urlParser from '../urlParser/urlParser';
import { ERRORS } from '../urlParser/types';

const data = {
  version: 6,
  collection: 'listings',
  id: 3,
  sort: 'desc',
  limit: 10
};

describe('urlParser function. Success cases: ', () => {
  const validUrlFormat = '/:version/api/:collection/:id';
  const validUrl = `/${data.version}/api/${data.collection}/${data.id}?sort=${data.sort}&limit=${data.limit}`;
  const validUrlNoQueryParams = `/${data.version}/api/${data.collection}/${data.id}`;

  test('valud url & url format: it should be ok', () => {
    const res = urlParser(validUrlFormat, validUrl);
    expect(res).toBeDefined();
    expect(res).toHaveProperty('version');
    expect(res).toHaveProperty('collection');
    expect(res).toHaveProperty('id');
    expect(res).toHaveProperty('sort');
    expect(res).toHaveProperty('limit');

    expect(res.version).toBe(data.version);
    expect(res.collection).toBe(data.collection);
    expect(res.id).toBe(data.id);
    expect(res.sort).toBe(data.sort);
    expect(res.limit).toBe(data.limit);
  });

  test('valud url & url format without queryparams: it should be ok', () => {
    const res = urlParser(validUrlFormat, validUrlNoQueryParams);
    expect(res).toBeDefined();
    expect(res).toHaveProperty('version');
    expect(res).toHaveProperty('collection');
    expect(res).toHaveProperty('id');
    expect(res).not.toHaveProperty('sort');
    expect(res).not.toHaveProperty('limit');

    expect(res.version).toBe(data.version);
    expect(res.collection).toBe(data.collection);
    expect(res.id).toBe(data.id);
  });

});

describe('urlParser function. Error cases: ', () => {
  const validUrlFormat = '/:version/api/:collection/:id';
  const invalidvalidUrl = `/${data.version}/api/${data.id}?sort=${data.sort}&limit=${data.limit}`; // the url is missing the collection param.
  const invalidQueryParams = `/${data.version}/api/${data.collection}/${data.id}?sort=${data.sort}&limit=`;

  test('Invalid url format. Should thrown an error.', () => {
    const t = (): void => {
      urlParser(validUrlFormat, invalidvalidUrl);
    };
    expect(t).toThrow(Error);
    expect(t).toThrow(ERRORS.INVALID_URLS);
  });

  test('Invalid query params. Should thrown an error.', () => {
    const t = (): void => {
      urlParser(validUrlFormat, invalidQueryParams);
    };
    expect(t).toThrow(Error);
    expect(t).toThrow(ERRORS.INVALID_QUERYPARAMS);
  });

  test('Invalid strings provided. Should thrown an error.', () => {
    const t = (): void => {
      urlParser('zxcv', 'abcd');
    };
    expect(t).toThrow(Error);
    expect(t).toThrow(ERRORS.INVALID_STRINGS);
  });

});
