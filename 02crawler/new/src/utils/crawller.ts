import superagent from "superagent"; //node 发送请求
import fs from "fs";
import path from "path";
interface Analyzers {
  analyze: (html: string, filePath: string) => string;
}
export class Crawller {
  private rawHtml = "";
  private filePath = path.resolve(__dirname, "../data/title.json");
  private async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }
  constructor(private url: string, private analyzer: Analyzers) {
    this.initSpiderProcess();
  }
  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }
  private async initSpiderProcess() {
    const html = await this.getRawHtml();
    const jsonString = this.analyzer.analyze(html, this.filePath);
    this.writeFile(jsonString);
  }
}
