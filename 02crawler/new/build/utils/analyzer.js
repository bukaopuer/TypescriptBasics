"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio")); //可以通过node形式获取内容
var fs_1 = __importDefault(require("fs"));
var Analyzer = /** @class */ (function () {
    function Analyzer() {
    }
    Analyzer.prototype.getCourseInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var titleList = $(".nav-ul");
        var titleInfos = [];
        titleList.map(function (index, element) {
            titleInfos.push({
                title: $(element).text()
            });
        });
        return {
            time: new Date().getTime(),
            data: titleInfos
        };
    };
    Analyzer.prototype.generateJsonContent = function (titleResult, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, "utf-8"));
        }
        fileContent[titleResult.time] = titleResult.data;
        return JSON.stringify(fileContent);
    };
    Analyzer.prototype.analyze = function (html, filePath) {
        var titleInfo = this.getCourseInfo(html);
        var jsonString = this.generateJsonContent(titleInfo, filePath);
        return jsonString;
    };
    Analyzer.getInstance = function () {
        if (!Analyzer.instance) {
            Analyzer.instance = new Analyzer();
        }
        return this.instance;
    };
    return Analyzer;
}());
exports.Analyzer = Analyzer;
