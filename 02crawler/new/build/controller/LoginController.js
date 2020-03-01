"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorator_1 = require("../decorator");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.home = function (req, res) {
        var isLogin = !!(req.session ? req.session.login : undefined);
        if (isLogin) {
            res.send("\n        <html>\n        <head></head>\n        <body>\n          <a href=\"/getData\">\u722C\u53D6\u5185\u5BB9</>\n          <a href=\"/showData\">\u5C55\u793A\u5185\u5BB9</>\n          <a href=\"/logOut\">\u9000\u51FA</>\n        </body>\n      </html>\n      ");
        }
        else {
            res.send("\n      <html>\n        <head></head>\n        <body>\n          <form method=\"post\" action=\"/login\">\n            <input type=\"password\" name=\"password\" />\n            <button>\u767B\u5F55</button>\n          </form>\n        </body>\n      </html>\n    ");
        }
    };
    LoginController.prototype.logOut = function (req, res) {
        if (req.session) {
            req.session.login = undefined;
        }
        res.redirect("/");
    };
    LoginController.prototype.login = function (req, res) {
        var password = req.body.password;
        var isLogin = !!(req.session ? req.session.login : undefined);
        if (isLogin) {
            res.send("已经登陆过");
        }
        else {
            if (password === "123" && req.session) {
                req.session.login = true;
                res.send("登录成功");
            }
            else {
                res.send("登录失败");
            }
        }
    };
    __decorate([
        decorator_1.get("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "home", null);
    __decorate([
        decorator_1.get("/logOut"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "logOut", null);
    __decorate([
        decorator_1.post("/login"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "login", null);
    LoginController = __decorate([
        decorator_1.controller('/')
    ], LoginController);
    return LoginController;
}());
