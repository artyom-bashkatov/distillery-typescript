// 4 вида декораторов

/* function Log(constructor: Function) {
    console.info(constructor)
}
function Log2(target: any, propName: string | Symbol) {
    console.info(target, propName)
}
function Log3(target: any, propName: string | Symbol, descriptor: TypedPropertyDescriptor<string> | TypedPropertyDescriptor<() => void>) {
    console.info(target, propName, descriptor)
}
@Log
class TestComponent {
    @Log2
    name:string
    constructor(name: string) {
        this.name = name
    }
    @Log3
    get componentName() {
        return this.name
    }
    @Log3
    logName():void {
        console.info(`Component Name: ${this.name}`)
    }
}
*/

interface ComponentDecorator {
  selector: string
  template: string
}

function Component(config: ComponentDecorator) {
  return function<T extends {new(...arg: any[]): object}>
  (Constructor: T) {
      return class extends Constructor {
          constructor(...args: any[]) {
              super(...args)
              const el = document.querySelector(config.selector)!
              el.innerHTML = config.template
          }
      }
  }
}

@Component({
  selector: '#card',
  template: `
  <div class="card">
  <div class="card-content">
  <span class="card-title">Card Component</span>
  </div>
  </div>
  `
})
class CardComponent {
  constructor(public name: string) {}

  @Bind
  logName():void {
      console.info(`Component Name: ${this.name}`)
  }
}

/// 2-й тип декораторов

function Bind(_: any, _2: any, descriptor: PropertyDescriptor):PropertyDescriptor {
  const original = descriptor.value
  return {
      configurable: true,
      enumerable: false,
      get() {
          return original.bind(this)
      }
  }
}

const card = new CardComponent('Card Component');
const btn = document.querySelector('#btn')!
btn.addEventListener('click', card.logName)

/// Еще пример

type ValidatorType = 'required' | 'email'

interface ValidatorConfig {
  [prop: string]: {
      [validateProp: string]: ValidatorType
  }
}

const validators:ValidatorConfig = {}

function Required(target: any, propName: string) {
  validators[target.constructor.name] = {
      ...validators[target.constructor.name],
      [propName]: 'required'
  }
}

function validate(obj: any):boolean {
  const objectConfig = validators[obj.constructor.name];
  if (!objectConfig) {
      return true
  }
  let isValid = true;
  Object.keys(objectConfig).forEach(key => {
      if (objectConfig[key] === 'required') {
          isValid = isValid && !!obj[key]
      }
  })
  return isValid
}

class Form {
  @Required
  public email: string | void

  constructor(email?: string) {
      this.email = email;
  }
}

const form = new Form('a@mail.com');
if (validate(form)) {
  console.info('Valid ', form)
} else {
  console.info('Validation Error')
}