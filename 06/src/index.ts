const userInfo: any = undefined;
function factory(msg: string) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function() {
      try {
        fn();
      } catch (e) {
        console.log(msg);
      }
    };
  };
}
class Test {
  @factory("用户名异常")
  getName() {
    console.log(userInfo.name);
  }
  @factory("年龄异常")
  getAge() {
    console.log(userInfo.age);
  }
}

const test = new Test();
test.getName();
test.getAge();
