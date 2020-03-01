//命名空间
/// <reference path="./components/Header.ts" />
/// <reference path="./components/Content.ts" />
/// <reference path="./components/Foot.ts" />
namespace Home {
   export class Page{
    constructor() {
      new Components.Header()
      new Components.Content()
      new Components.Footer()
    }
  }
}
