"use strict";
exports.__esModule = true;
var types_1 = require("./types");
var urlParser = function (urlFormat, url) {
    var _a;
    if (!urlFormat || !url)
        return {};
    var urlParams = (_a = url.split(types_1.SEPARATORS.BASE_URL)[0]) === null || _a === void 0 ? void 0 : _a.split(types_1.SEPARATORS.PATH);
    var queryParams = url.split(types_1.SEPARATORS.BASE_URL)[1];
    var paramsArray = urlFormat.split(types_1.SEPARATORS.PATH);
    var urlInfo = {};
    if (urlParams.length == 1 || paramsArray.length == 1)
        throw new Error(types_1.ERRORS.INVALID_STRINGS);
    for (var i in paramsArray) {
        if (paramsArray[i].indexOf(':') != -1) {
            var paramName = paramsArray[i].replace(':', '');
            var value = Number.isNaN(Number(urlParams[i])) ? urlParams[i] : parseInt(urlParams[i]);
            if (!value)
                throw new Error(types_1.ERRORS.INVALID_URLS);
            urlInfo[paramName] = value;
        }
    }
    if (queryParams) {
        var queryParamsArray = queryParams.split(types_1.SEPARATORS.PARAMS);
        for (var i in queryParamsArray) {
            var key = (queryParamsArray[i]).split(types_1.SEPARATORS.KEY_VAL)[0];
            var val = (queryParamsArray[i]).split(types_1.SEPARATORS.KEY_VAL)[1];
            if (!key || !val)
                throw new Error(types_1.ERRORS.INVALID_QUERYPARAMS);
            urlInfo[key] = Number.isNaN(Number(val)) ? val : parseInt(val);
        }
    }
    return urlInfo;
};
exports["default"] = urlParser;
