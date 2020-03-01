import express, { Request } from "express";
import { parse } from "querystring";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import "./controller/LoginController";
import "./controller/CrawllerContentController";

import  router  from "./router";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "session",
    keys: ['teacher ding'],
    maxAge: 24 * 60 * 60 * 1000
  })
);
app.use(router);

app.listen(7001, function() {
  console.log("server is starting");
});
