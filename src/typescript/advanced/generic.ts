const cars: string[] = ['Ford', 'Audi'];
const cars2: Array<string> = ['Ford', 'Audi']


// Generic string позволяет вызывать autocomplete для data ниже разрешения промиса.
const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 2000);
})

promise.then(data => {
    console.info(data);
})

// Другая запись
const promise2: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 2000);
})

/*
function mergeObjects(a: object, b: object) {
    return Object.assign({}, a, b)
}
const merged = mergeObjects({name: 'Max'}, {age: 26})
// будет ошибка при обращении к ключам merged, так как у него нет типа
// console.info(merged.name)
*/

function mergeObjects<T, R>(a: T, b: R) {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'Max'}, {age: 26})
const merged2 = mergeObjects({model: 'Ford'}, {year: 2010})
console.info(merged.name, merged.age);

// но в mergeObjects мы можем передавать строки и это будет ошибка
// для исправления этого мы используем constraints - ограничения в дженериках

function mergeObjectsConstraints<T extends object, R extends object>(a: T, b: R) {
    return Object.assign({}, a, b)
}

/// еще пример работы с дженериками

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    }
}

console.info(withCount('Hello Typescript'))
console.info(withCount(['Hello', 'TypeScript']))
// console.info(withCount(20))

/// еще пример с дженериками

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: 'TypeScript',
    age: 26
}

console.info(getObjectValue(person, 'name'));
console.info(getObjectValue(person, 'age'));
// ошибка по ключам через дженерики и констрейты
//console.info(getObjectValue(person, 'job'));

class Collection<T extends number | string | boolean> {
    constructor(private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }
}

const strings = new Collection<string>(['I', 'Am', 'Strings'])
strings.add('!');
strings.remove('Am')
console.info(strings.items)

const numbers = new Collection<number>([1, 2, 3])
numbers.add(4);
numbers.remove(3)
console.info(strings.items)

// ошибка, так как констрейт указывает только на number, string, boolean
/* const objects = new Collection([{a: 1}, {b: 2}])
objects.add(4);
objects.remove(3)
console.info(strings.items) */

interface Car {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number):Car {
    const car:Partial<Car> = {}

    if (model.length > 3) {
        car.model = model;
    }

    if (year > 2000) {
        car.year = year;
    }

    return car as Car;
}

console.info(createAndValidateCar('mercedes', 2018))
console.info(createAndValidateCar('bmw', 1995))

const rcars: Readonly<Array<string>> = ['Ford', 'Audi'];
// rcars.shift();

const ford:Readonly<Car> = {
    model: 'Ford',
    year: 2020
}
ford.model = 'Ferrari'