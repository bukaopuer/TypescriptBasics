//15 方法装饰器
//参数 target，key
//普通函数 target对应；类的prototype， key 方法名字
//静态方法 target对应类的构造函数

// function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//   console.log(target)
//   console.log(key)
//   // descriptor.writable = false
//   descriptor.value = function () {
//     return 'hahahah'
//   }
// }

// class Test {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   @getNameDecorator
//   static getName() {
//     return '123';
//   }
// }
// const test = new Test("丁");

//访问器装饰器 和方法装饰器参数一样
// get set 不能同时使用装饰器
// function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//   console.log(target)
//   console.log(key)
//   // descriptor.writable = false
//   descriptor.value = function () {
//     return 'hahahah'
//   }
// }

// class Test {
//   private _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   @visitDecorator
//   set name(name) {
//     this._name = name
//   }
// }
// const test = new Test("丁");

// 属性装饰器 target 是类的prototype key 是属性名

// function nameDecorator (target: any, key: string):any {
//   const descriptor: PropertyDescriptor = {
//     writable: false
//   }
//   return descriptor
// }

//修改的并不是实例上的属性而是prototype上的属性
// function nameDecorator (target: any, key: string):any {
//   target[key] = '123'
// }
// class Test {
//   @nameDecorator
//   name: string = "dell";
// }
// const test = new Test();
// // test.name = '123'
// console.log(test.name)

//参数装饰器
// function paramDecorator(target:any, method:string, paramIndex: number) {
//   console.log(target, method, paramIndex)
// }
// class Test {
//   // constructor(public name: string, public age: number) {}
//   getInfo(@paramDecorator name: string, age: number) {
//     console.log(name, age);
//   }
// }
// const test = new Test();
// test.getInfo("ding", 18);
