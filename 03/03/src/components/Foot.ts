namespace Components {
  export class Footer{
    constructor() {
      const elem = document.createElement('div')
      elem.innerHTML = 'this is footer'
      document.body.appendChild(elem)
    }
  }
}