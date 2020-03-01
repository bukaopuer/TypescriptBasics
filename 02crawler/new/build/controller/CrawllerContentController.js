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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var crawller_1 = require("../utils/crawller");
var analyzer_1 = require("../utils/analyzer");
var decorator_1 = require("../decorator");
var checkLogin = function (req, res, next) {
    var isLogin = !!(req.session ? req.session.login : undefined);
    if (isLogin) {
        next();
    }
    else {
        res.send("请先登录");
    }
};
var CrawllerContentController = /** @class */ (function () {
    function CrawllerContentController() {
    }
    CrawllerContentController.prototype.getData = function (req, res) {
        var url = "https://www.roboc.org.cn/HomePage/Index";
        var analyzer = analyzer_1.Analyzer.getInstance();
        var crawller = new crawller_1.Crawller(url, analyzer);
        res.send("getData success");
    };
    CrawllerContentController.prototype.showData = function (req, res) {
        try {
            var postion = path_1.default.resolve(__dirname, "../../build/data/title.json");
            var result = fs_1.default.readFileSync(postion, "utf-8");
            res.send(JSON.parse(result));
        }
        catch (e) {
            res.send("暂无数据");
        }
    };
    __decorate([
        decorator_1.get("/getData"),
        decorator_1.use(checkLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrawllerContentController.prototype, "getData", null);
    __decorate([
        decorator_1.get("/showData"),
        decorator_1.use(checkLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrawllerContentController.prototype, "showData", null);
    CrawllerContentController = __decorate([
        decorator_1.controller('/')
    ], CrawllerContentController);
    return CrawllerContentController;
}());
exports.CrawllerContentController = CrawllerContentController;
