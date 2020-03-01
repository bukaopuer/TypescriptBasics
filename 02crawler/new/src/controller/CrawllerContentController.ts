import fs from "fs";
import path from "path";
import { Crawller } from "../utils/crawller";
import { Analyzer } from "../utils/analyzer";
import { Request, Response, NextFunction } from "express";
import { controller, get, use } from "../decorator";

interface RequestWidthBody extends Request {
  body: {
    [key: string]: string | undefined;
  };
}
const checkLogin = (req: Request, res: Response, next: NextFunction):void => {
  const isLogin = !!(req.session ? req.session.login : undefined);
  if (isLogin) {
    next();
  } else {
    res.send("请先登录");
  }
};

@controller('/')
export class CrawllerContentController {
  @get("/getData")
  @use(checkLogin)
  getData(req: RequestWidthBody, res: Response):void {
    const url = "https://www.roboc.org.cn/HomePage/Index";
    const analyzer = Analyzer.getInstance();
    const crawller = new Crawller(url, analyzer);
    res.send("getData success");
  }
  @get("/showData")
  @use(checkLogin)
  showData(req: RequestWidthBody, res: Response):void {
    try {
      const postion = path.resolve(__dirname, "../../build/data/title.json");
      const result = fs.readFileSync(postion, "utf-8");
      res.send(JSON.parse(result));
    } catch (e) {
      res.send("暂无数据");
    }
  }
}
