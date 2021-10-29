interface PersonInterface {
  readonly id: number,
  name: string,
  age?: number,
  register(): string
}

class Person implements PersonInterface {
  // protected - id доступ из инстанса и также из унаследованных классов
  // private - id доступ только в самом инстансе класса - внутри
  // public - id доступен публично и доступ можно получить ото всюду
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad Traversy');
console.info(brad.register());
console.info(brad);


// subclass
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}


const emp = new Employee(3, 'Shawn', 'Developer');
console.info(emp.register())












export {};