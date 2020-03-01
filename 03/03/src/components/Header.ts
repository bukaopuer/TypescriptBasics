namespace Components {
  export class Header{
    constructor() {
      const elem = document.createElement('div')
      elem.innerHTML = 'this is Header'
      document.body.appendChild(elem)
    }
  }
}