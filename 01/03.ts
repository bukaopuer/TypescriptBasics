//8.单例模式
class Demo {
  private static instace: Demo;
  private constructor(private name: string) {}
  public static getInstance() {
    if (!this.instace) {
      this.instace = new Demo("ding");
    }
    return this.instace;
  }
}

const demo1 = Demo.getInstance();

