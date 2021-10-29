function getArray<T>(items: T[]): T[] {
  return [].concat(items as []);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['Brad', 'John', 'Jill']);
// numArray.push('test');


// dynamically calculate what type is use for arr variable
const last = <T>(arr: T[]) => {
  return arr.concat().pop();
}
// implicit set type to number
const last1 = last<number>([1, 2, 3, 4 , 5]);

// implicit set type to string
const last2 = last<string>(['one', 'two']);


const makeArr = <T, Y>(x: T, y: Y): [T, Y] => {
  return [x, y]
};

const varArr1 = makeArr<number, number>(5, 6);
const varArr2 = makeArr<string, string>("a", "b");
const varArr3 = makeArr<string, number>("a", 5);