import superagent from "superagent"; //node 发送请求
import cheerio from "cheerio"; //可以通过node形式获取内容
import fs from "fs";
import path from "path";
interface Title {
  title: string;
}
interface titleResult {
  time: number;
  data: Title[];
}
interface Content {
  [propName: number]: Title[];
}
class Crawller {
  private secret = "secret";
  private url = "https://www.roboc.org.cn/HomePage/Index";
  private rawHtml = "";
  private filePath = path.resolve(__dirname, "../data/title.json");
  getCourseInfo(html: string) {
    let $ = cheerio.load(html);
    const titleList = $(".nav-ul");
    const titleInfos: Title[] = [];
    titleList.map((index, element) => {
      titleInfos.push({
        title: $(element).text()
      });
    });
    return {
      time: new Date().getTime(),
      data: titleInfos
    };
  }
  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }
  constructor() {
    this.initSpiderProcess();
  }
  writeFile(content:string) {
    fs.writeFileSync(this.filePath, content)
  }
  generateJsonContent(titleResult: titleResult) {
    let fileContent: Content = {};
    if (fs.existsSync(this.filePath)) {
      fileContent = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
    }
    fileContent[titleResult.time] = titleResult.data;
    return  JSON.stringify(fileContent)
  }
  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const titleInfo = this.getCourseInfo(html);
    const jsonString = this.generateJsonContent(titleInfo);
    this.writeFile(jsonString)
  }
}

const crawller = new Crawller();
