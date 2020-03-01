//7.类的定义与继承
class Person {
  name = "dell";
  getName() {
    return this.name;
  }
}
// const person = new Person ()
// console.log(person.getName())

//类的继承
class Teacher extends Person {
  getTeacherName() {
    return "Teacher";
  }
}

const teacher = new Teacher();
console.log(teacher.getName(), teacher.getTeacherName());

//子类会重写父类的方法 同c# 子类调用父类的方法 super
class student extends Person {
  getName() {
    return super.getName() + "student";
  }
}

//访问修饰符 private pretected public 默认是public

//constructor 构造器

// class Person1 {
//   private name: string;
//   constructor(name: string) {
//     this.name = name
//   }
// }
class Person1 {
  constructor(public name: string) {}
}
const person = new Person1('dell') ;

class Teacher1 extends Person1 {
  constructor(age:number, names : string) {
    super(names)
    //即使父类没有构造器，子类也要调用空的super()
  }
}

//私有属性 setter getter

class Person3{
  constructor(private name: string) {}
  get getName() {
    return this.name
  }
}

const person3 = new Person3('丁') 
console.log(person3.getName) 