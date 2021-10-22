const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10;

const message: string = "Hello Typescript"

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'Typescript'];

// Tuple
const contact: [string, number] = ['Typescript', 2];

let variable: any = 42
variable = "Hello";
variable = []

function sayMyName(name: string): void {
    console.info(name)
}

function throwError(message: string): never {
    throw new Error(message);
}

// Custom Types
type Login = string
const login: Login = "admin"

type ID = string | number
const id1: ID = '1234'
const id2: ID = 1234

type SomeType = string | null | undefined

export {};