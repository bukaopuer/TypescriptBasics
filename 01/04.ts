//9 只读修饰器 抽象类
class Person {
  public readonly _name: string; //readonly 只读修饰器
  constructor(name:string) {
    this._name = name
  }
  get name() {
    return this._name
  }
}

//抽象类
abstract class Geom {
  width:number;
  getType() {
    return 'geom'
  }
  abstract getArea(): number;
}

class Cricle extends Geom{
  getArea(): number {
    return 111
  }
}
const cricle = new Cricle()
console.log(cricle.getArea())