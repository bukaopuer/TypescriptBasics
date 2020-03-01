//10.联合类型和类型保护
interface Bird {
  fly: boolean;
  sing: () => {};
}
interface Dog {
  fly: boolean;
  bark: () => {};
}
// function trainAnimal(animal: Bird | Dog) {
//   //只能提示只会提示联合类型的共有属性
//   animal.fly

// }
//类型保护的方法

//类型断言
function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}

//in 语法类型保护
function trainAnimal1(animal: Bird | Dog) {
  if ("sing" in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

//typeof 类型保护
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}

//instance 类型保护
class NumberObj {
  count: number;
}
function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
}

//11.枚举类型
enum Status {
  OFFLINE,
  ONLINE,
  DELETED
}
function getResult(status ) {
  if (status === Status.OFFLINE) {
    return "offline";
  } else if (status === Status.ONLINE) {
    return "online";
  } else if (status === Status.DELETED) {
    return "deleted";
  } else {
    return "error";
  }
}
