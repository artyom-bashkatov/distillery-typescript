import React, { useState, useRef, useContext, useReducer, createContext } from 'react';

interface IUser {
  name: string,
  age?: number,
}

interface ITheme {
  backgroundColor: string,
  color: string,
}

interface State {
  count: number
}

type Action = {
  type: 'increment' | 'decrement'
}

const ExampleApp = () => {
  // basic hook
  // const [value, setValue] = useState(0);

  // hook with generic
  // const [value, setValue] = useState<number | undefined>(undefined);

  // hook with 2 same variants of array with number type inside
  // const [value, setValue] = useState<number[] | Array<number>>([]);

  // hook with interface example
  const [value, setValue] = useState<IUser>({ name: 'Yauhen' });

  const ThemeContext = createContext<ITheme>({
    backgroundColor: 'black',
    color: 'white'
  })

  const themeContext = useContext<ITheme>(ThemeContext);

  const ref1 = useRef<HTMLElement>(null!);
  const ref2 = useRef<HTMLElement | null>(null);

  const counterReducer = ({ count }: State, { type }: Action) => {
    switch (type) {
      case 'increment': return { count: count + 1}
      case 'decrement': return { count: count - 1}
      default: return { count }
    }
  }
  
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  dispatch({ type: 'increment' });
  dispatch({ type: 'decrement' });


  return <>
  {value}
  </>
}

export { ExampleApp };