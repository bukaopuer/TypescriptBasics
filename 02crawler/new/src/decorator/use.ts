import "reflect-metadata";
import { RequestHandler } from "express-serve-static-core";
export function use(middleware: RequestHandler) {
  return function(target: any, key: string) {
    let oriMiddleWares:RequestHandler[] = Reflect.getMetadata('middlewares',target,key) || []
    oriMiddleWares.push(middleware)
    Reflect.defineMetadata("middlewares", oriMiddleWares, target, key);
  };
}