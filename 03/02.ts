//13 泛型

//函数泛型
function join<ABC>(first: ABC, seconde: ABC) {
  return "${first}${seconde}";
}
join<number>(1, 1);

function map<T>(params: Array<T>) {
  return params;
}

map<number>([1, 23, 4]);

function join1<T, P>(f: T, sec: P) {}
join1<string, number>("1", 2);
join1("1", 2); //泛型会做类型腿短

//类中的泛型
interface Item {
  name: string;
}
class DataManager<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name;
  }
}

const data = new DataManager ([{
  name:'stirng' 
}])
data.getItem(0)



interface Test {
  name: string,
}
class DataManager1<T extends number | string> {
  constructor(private data: T[]) {}
  getItem(index: number) {
    return this.data[index];
  }
}

const data11 = new DataManager1<string> (['1','2'])
data.getItem(0)



// 使用泛型作为类型注解
const func: <T>() => string = <T>() => {
  return '123'
}