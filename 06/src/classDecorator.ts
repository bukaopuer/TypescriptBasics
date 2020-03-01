//14 类装饰器
// 装饰器本身是一个函数
// 装饰器通过@符号来使用
//类装饰器参数是一个构造函数
//类创建好后会立即执行装饰器
//有多个装饰器时，会先执行最下面（从后往前）的装饰器

// function testDecorator(constructor: any) {
//   console.log(0);
// }
// function testDecorator1(constructor: any) {
//   console.log(1);
// }

// //装饰器工厂
// function decoratorFactory(flag: boolean) {
//   if (flag) {
//     return function testDecorator(constructor: any) {
//       console.log("haha");
//     };
//   } else {
//     return function testDecorator(constructor: any) {};
//   }
// }
// @testDecorator
// @testDecorator1
// @decoratorFactory(true)
// class Test {}

// const test = new Test();



//更好的写法
function testDecoratorFactory() {
  return function<T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      getName() {
        console.log("****" + this.name);
      }
    };
  };
}

export const Test = testDecoratorFactory()(
  class {
    name: string = "";
    constructor(name: string) {
      this.name = name;
    }
  }
);

const test = new Test("丁");
test.getName()