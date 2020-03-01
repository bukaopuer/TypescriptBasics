import cheerio from "cheerio"; //可以通过node形式获取内容
import fs from "fs";

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
export class Analyzer {
  private static instance:Analyzer;
  private getCourseInfo(html: string) {
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
  private generateJsonContent(titleResult: titleResult, filePath: string) {
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    fileContent[titleResult.time] = titleResult.data;

    return JSON.stringify(fileContent);
  }
  public analyze(html: string, filePath: string) {
    const titleInfo = this.getCourseInfo(html);
    const jsonString = this.generateJsonContent(titleInfo, filePath);
    return jsonString;
  }
  private constructor () {

  }
  static getInstance() {
    if(!Analyzer.instance) {
      Analyzer.instance = new Analyzer()
    }
    return this.instance
  }
}
