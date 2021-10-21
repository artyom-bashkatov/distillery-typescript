import React from "react";

type Position = {
  id: string,
  value: string,
  title: string,
}

// with generic type
const POSITIONS: Array<Position> = [
  {
    id: 'fd',
    value: 'Front-end Developer',
    title: 'Front-end Developer'
  },
  {
    id: 'bd',
    value: 'Back-end Developer',
    title: 'Back-end Developer'
  }
]

// array with type
const POSITIONS_: Position[] = [
  {
    id: 'fd',
    value: 'Front-end Developer',
    title: 'Front-end Developer'
  },
  {
    id: 'bd',
    value: 'Back-end Developer',
    title: 'Back-end Developer'
  }
]

const styles: React.CSSProperties = { display: 'block', marginBottom: '10px' };

export { POSITIONS, POSITIONS_ };
export {};