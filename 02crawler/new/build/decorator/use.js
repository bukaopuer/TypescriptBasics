"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function use(middleware) {
    return function (target, key) {
        var oriMiddleWares = Reflect.getMetadata('middlewares', target, key) || [];
        oriMiddleWares.push(middleware);
        Reflect.defineMetadata("middlewares", oriMiddleWares, target, key);
    };
}
exports.use = use;
