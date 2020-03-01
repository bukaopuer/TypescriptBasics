"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
})(Methods || (Methods = {}));
exports.router = express_1.Router();
function controller(target) {
    for (var key in target.prototype) {
        var path = Reflect.getMetadata("path", target.prototype, key);
        var method = Reflect.getMetadata("method", target.prototype, key);
        var handler = target.prototype[key];
        var middlerwar = Reflect.getMetadata("middleware", target.prototype, key);
        if (path && method && handler) {
            if (middlerwar) {
                exports.router[method](path, middlerwar, handler);
            }
            else {
                exports.router[method](path, handler);
            }
        }
    }
}
exports.controller = controller;
function use(middleware) {
    return function (target, key) {
        Reflect.defineMetadata("middleware", middleware, target, key);
    };
}
exports.use = use;
function getFunctionDecorator(type) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata("path", path, target, key);
            Reflect.defineMetadata("method", type, target, key);
        };
    };
}
exports.get = getFunctionDecorator(Methods.get);
exports.post = getFunctionDecorator(Methods.post);
