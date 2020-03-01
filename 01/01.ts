//1.定义类型后智能提示更快捷
//静态类型
const count: number = 2020;

//自定义类型接口
interface Point {
  x: number;
  y: number;
}

const point: Point = {
  x: 1,
  y: 2
};

//2基础类型和对象类型

//基础类型  null undefined symbol boolean void string number
const count1: number = 123;
const sNmae: string = "ding";

//对象类型
const teacher: {
  name: string;
  age: number;
} = {
  name: "Dell",
  age: 18
};

const arr: number[] = [1, 2, 3];

class Person {}
const ding: Person = new Person();

const getTotal: () => number = () => {
  return 123;
};
const func = (str: string): number => {
  return 1;
};

//3.类型注解和类型推断 type annotation type inference
//写了：的,是注解， 不写 ts 也会自己推断
//也就是说 如果ts能分析出是什么类型就不需要类型注解了

//不需要注解
const fNumber = 1;
const sNumber = 2;
const threeNumber = fNumber + sNumber;

//需要注解
function getTotals(fNumer: number, sNumber: number): number {
  return fNumber + sNumber;
}
//不需要
const total = getTotals(1, 2);

//4函数相关类型
function sayHello(): void {
  console.log("hello");
}
//函数永远不可能执行到最后
function errorEmitter(): never {
  throw new Error();
}

//结构语法注解的写法
function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}

//5.数组和元组

const numArr: number[] = [1, 2, 3, 4];
const arrs: (number | string)[] = [1, 2, 3, 4, "hahah"];

const objaRR: { name: string }[] = [{ name: "123" }];

class Teacher {
  name: string;
  age: number;
}
const TeaArr: Teacher[] = [new Teacher(), { name: "ding", age: 99 }];

//元组 tuple 元组规定个数，顺序类型的 类型注解
const teacherInfo: [string, string, number] = ["Dell", "male", 18];
//元组的应用场景：应用于读取excel

//6.interface 于 type的区别
//type 可以直接定义类型的别名，interface只能代表函数和对象
//ts中尽量使用interface
type Person1 = string;

interface Peo {
  readonly name: string;
  age?: number;
  [propName: string]: any; //多出其它类型也是ok的
  say(): string ;
}
const getPersonName = (person: Peo): void => {
  console.log(person.name);
};

const person = {
  name: "dell",
};
getPersonName(person);
//传入字面量时会进行强校验
getPersonName({
  name: "haha", 
  say(){
    return '123';
  }
});

class User implements Peo {
  name = 'ding';
  say() {
    return 'hellow'
  };
  sasa = 123
}

//接口定义函数
interface SayHi {
  (word:string) : string
}

const say :SayHi = (hah : string) => '123'



