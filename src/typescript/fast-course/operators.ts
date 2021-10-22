interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key:PersonKeys = 'name';
key = 'age';

// вызовет ошибку ключа, так как тип PersonKeys может включать только name и age
//key = 'job';

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

// только name и mail
type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

let user1: UserKeysNoMeta = 'name'
// только name и mail можем задавать
// user1 = "_id"