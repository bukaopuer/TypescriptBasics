//泛型中keyof语法的使用
interface Person {
  name: string;
  age: number;
  gender: boolean;
}
class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T):Person[T] {
    return this.info[key];
  }
}
const teacher = new Teacher({
  name: "頂避寒",
  age: 18,
  gender: true
});
const test = teacher.getInfo('name');
console.log(test)




