"use strict";
exports.__esModule = true;
exports.ERRORS = exports.SEPARATORS = void 0;
var SEPARATORS;
(function (SEPARATORS) {
    SEPARATORS["PATH"] = "/";
    SEPARATORS["BASE_URL"] = "?";
    SEPARATORS["PARAMS"] = "&";
    SEPARATORS["KEY_VAL"] = "=";
})(SEPARATORS = exports.SEPARATORS || (exports.SEPARATORS = {}));
var ERRORS;
(function (ERRORS) {
    ERRORS["INVALID_URLS"] = "Invalid url or url format provided. Invalid path params.";
    ERRORS["INVALID_STRINGS"] = "Invalid url strings provided.";
    ERRORS["INVALID_QUERYPARAMS"] = "Invalid url query params provided.";
})(ERRORS = exports.ERRORS || (exports.ERRORS = {}));
