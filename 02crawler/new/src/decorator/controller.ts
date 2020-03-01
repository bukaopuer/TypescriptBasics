import router from "../router";
import "reflect-metadata";
import { RequestHandler } from "express";

enum Methods {
  get = "get",
  post = "post"
}
export function controller(root: string) {
  return function(target: new (...args: any[]) => any) {
    for (let key in target.prototype) {
      const path: string = Reflect.getMetadata("path", target.prototype, key);
      const method: Methods = Reflect.getMetadata(
        "method",
        target.prototype,
        key
      );
      const handler: any = target.prototype[key];
      const middlerwars: RequestHandler[] = Reflect.getMetadata(
        "middlewares",
        target.prototype,
        key
      );
      if (path && method) {
        const fullPath = root === "/" ? path : root + path;
        if (middlerwars && middlerwars.length > 0) {
          router[method](fullPath, ...middlerwars, handler);
        } else {
          router[method](fullPath, handler);
        }
      }
    }
  };
}
