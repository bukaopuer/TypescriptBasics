import { Request, Response } from "express";
import { controller, get, post } from "../decorator";
interface RequestWidthBody extends Request {
  body: {
    [key: string]: string | undefined;
  };
}
@controller('/')
class LoginController {
  @get("/")
  home(req: RequestWidthBody, res: Response): void {
    const isLogin = !!(req.session ? req.session.login : undefined);
    if (isLogin) {
      res.send(`
        <html>
        <head></head>
        <body>
          <a href="/getData">爬取内容</>
          <a href="/showData">展示内容</>
          <a href="/logOut">退出</>
        </body>
      </html>
      `);
    } else {
      res.send(`
      <html>
        <head></head>
        <body>
          <form method="post" action="/login">
            <input type="password" name="password" />
            <button>登录</button>
          </form>
        </body>
      </html>
    `);
    }
  }
  @get("/logOut")
  logOut(req: RequestWidthBody, res: Response): void {
    if (req.session) {
      req.session.login = undefined;
    }
    res.redirect("/");
  }
  @post("/login")
  login(req: RequestWidthBody, res: Response): void {
    const { password } = req.body;
    const isLogin = !!(req.session ? req.session.login : undefined);
    if (isLogin) {
      res.send("已经登陆过");
    } else {
      if (password === "123" && req.session) {
        req.session.login = true;
        res.send("登录成功");
      } else {
        res.send("登录失败");
      }
    }
  }
}
