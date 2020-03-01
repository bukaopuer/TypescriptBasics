import "reflect-metadata";
enum Methods {
  get = "get",
  post = "post"
}
function getFunctionDecorator(type: Methods) {
  return function(path: string) {
    return function(target: any, key: string) {
      Reflect.defineMetadata("path", path, target, key);
      Reflect.defineMetadata("method", type, target, key);
    };
  };
}
export const get = getFunctionDecorator(Methods.get);
export const post = getFunctionDecorator(Methods.post);