"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponseData = function (errMsg, data) {
    if (errMsg) {
        return {
            code: 400,
            errMsg: errMsg,
            data: data
        };
    }
    else {
        return {
            code: 200,
            data: data
        };
    }
};
