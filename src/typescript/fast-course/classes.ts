class TypeScript {
  version: string

  constructor(version: string) {
      this.version = version;
  }

  info(name: string) {
      return `[${name}]: Typescript version is ${this.version}`
  }
}

class Car {
  readonly model: string
  readonly numberOfWheels: number = 4

  constructor(theModel: string) {
      // только внутри конструктора
      this.model = theModel
  }
}

class Car2 {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) {}
}

// Модификаторы

class Animal {
  protected voice:string = ""
  public color: string = "black"

  constructor() {
      this.go();
  }

  // можем вызывать только там, где определен
  private go() {
      console.info("Go")
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
      this.voice = voice
  }
}

const cat = new Cat();
cat.setVoice('test')
console.info(cat.color)

// Абстрактные классы

abstract class abstractComponent {
  abstract render():void
  abstract info():string
}

class AppComponent extends abstractComponent {
  render(): void {
      console.info("Component on render")
  }

  info():string {
      return "This is info"
  }
}