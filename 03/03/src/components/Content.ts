namespace Components {
  export class Content{
    constructor() {
      const elem = document.createElement('div')
      elem.innerHTML = 'this is content'
      document.body.appendChild(elem)
    }
  }
}