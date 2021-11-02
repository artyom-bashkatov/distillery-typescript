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


/* const makeFullName = (obj: { firstName: string; lastName: string}) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  }
} */

// error, because age is not in constraint
// const var4 = makeFullName({ firstName: 'Bob', lastName: 'Junior', age: 15})
//extend Generic by constraint
const makeFullName = <T extends { firstName: string; lastName: string}>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  }
}
const var4 = makeFullName({ firstName: 'Bob', lastName: 'Junior', age: 15});

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}
type NumberTab = Tab<number>;
type StringTab = Tab<string>;
/*
// is equal to upper variant
type NumberTab = {
  id: string;
  position: number;
  data: number;
}
*/

// Generics in React
/* interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {
  const [state] = useState<{ fullname: string | null}>({ fullname: ""})
  return <div>hello {name}</div>
} */

// example with children and generics
interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element
}

const Form = <T extends {}>({values, children}: FormProps<T>) => {
  return children(values)
}

const App: React.FC = () => {
  return <div className="App">
    <Form<{ firstName: string | null}> values={{ firstName: "bob"}}>{(values) => <div>{values.firstName}</div>}</Form>
  </div>
}