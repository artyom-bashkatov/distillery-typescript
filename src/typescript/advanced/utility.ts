/*
Partial<T>
Readonly<T>
Record<K,T>
Pick<T,K>
Omit<T,K>
Exclude<T,U>
Extract<T,U>
NonNullable<T>
ReturnType<T>
InstanceType<T>
Required<T>
ThisType<T>
*/


// Example with Partial<T>
export interface Starship {
  name: string;
  enableHyperjump: boolean;
}

const updateStarship = (id: number, starship: Partial<Starship>) => {};
// it's correct, because Partial utility set name?: and enableHyperjump?:
updateStarship(1, {name: 'Explorer'})


// Example with Required<T>
export interface StarshipAnother {
  name?: string;
  enableHyperjump?: boolean;
}

const updateStarship2 = (id: number, starship: Required<StarshipAnother>) => {};
// it's correct, because Partial utility set name: and enableHyperjump: as required
updateStarship2(1, {name: 'Explorer', enableHyperjump: true})

// Example with Readonly<A> - sets all fields to readonly and prevent change it

// Example with Record<K,T> - K it's a key of object, and T it's a value of keys
export const aRecord: Record<string, number> = {
  apples: 10,
  oranges: 20
}

export const starships: Record<string, Starship> = {
  Explorer1: {
    name: "Explorer1",
    enableHyperjump: true
  },
  Explorer2: {
    name: "Explorer2",
    enableHyperjump: false
  }
}


// Example with Pick<T, K> - get fields from object
export type StarshipNameOnly = Pick<Starship, 'name'>;

// Example with Omit<T, K> - set fields without
export type StarshipWithoutName = Omit<Starship, 'name'>;

// Example with Exclude<T, U>
export type AvailableDrinks = 'Coffee' | 'Tea' | 'Orange Juice' | 'Lemonade';
export let JohnsDrink:AvailableDrinks;
JohnsDrink = 'Coffee';

type DrinksJaneDoesntLike = 'Coffee' | 'Orange Juice';
type DrinksJaneLikes = 'Tea' | 'Lemonade' | 'Mohito';
export let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
// JanesDrink = 'Coffee' - error, because coffee is exclude

// Example with Extract<T, K> - delete fields that don't has in AvailableDrinks for Jane
export let JanesCanDrink: Extract<AvailableDrinks, DrinksJaneLikes>;

// Example with NonNullable<T>
type A = string | string[] | null | undefined;
export type B = NonNullable<A>;

// example with ReturnType
function helloWorld() {
  return 'Hello world';
}
export type HelloWorldType = ReturnType<typeof helloWorld> // string should return

// Example with InstanceType<T>
/* export class Car {
  name: string;

  drive() {}

  constructor(name: string) {
    this.name = name;
  }

  static buildCar() {
    // some features
  }
}

export type CarInstanceType = InstanceType<typeof Car>; // Car
*/

type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance; 

export function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean;
    delete() {}
  }
}

class Car {
  constructor(public name: string) {}
}

class User {
  constructor(public name: string) {}
}

export const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);

type DeletableUserInstance = InstanceType<typeof DeletableUser>

export class Profile {
  user: DeletableUserInstance
}

const profile = new Profile();
profile.user = new DeletableUser('John');

// Example with ThisType<T>
interface MyObject {
  sayHello():void
}

interface MyObjectThis {
  helloWorld():string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
  sayHello() {
    return this.helloWorld();
  }
}

myObject.sayHello = myObject.sayHello.bind({
  helloWorld() {
    return 'Hello World!'
  }
});

myObject.sayHello();