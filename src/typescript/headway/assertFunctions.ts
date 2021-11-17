import { AssertionError } from "assert";

// asserts val is number - magic
function assertIsNumber(val: any): asserts val is number {
  if (typeof val !== "number") {
    throw new AssertionError({ message: 'Not a number!' });
  }
}

function double(input: any) {
  assertIsNumber(input);

  return input * 2;
}

double('string');
double(2);