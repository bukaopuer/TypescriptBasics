//定义全局变量 declare var
// declare var $: (param: () => void) => void;

//定义全局函数 支持重载
// declare function $(param: () => void): void;
// declare function $(
//   param: string
// ): {
//   html: (html: string) => {};
// };

//代码优化
interface JqueryInterface {
  html: (html: string) => JqueryInterface;
}
declare function $(readyFunc: () => void): void;
declare function $(selector: string): JqueryInterface;

//如何对对象进行定义， 如何对类进行定义，以及命名空间嵌套
declare namespace $ {
  namespace fn {
    class init{}
  }
}



//进一步优化 使用interface实现函数重载功能
// interface Jquery {
//   (readyFunc: () => void): void;
//   (selector: string): JqueryInterface;
// }
// declare var $ :Jquery()

