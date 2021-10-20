import React from 'react';

//example. TS 4.1.2 Type for children is not control
const Title: React.FC<{title: string}> = ({ title, children }) => <h1>{title}{children}</h1>
export default Title;

type TitleProps = {
  title: string,
  test?: string // npt required propertie
}

const TitleSecond = ({ title, test = 'test' }: TitleProps) => <h1>{title}{test}</h1>;
export { TitleSecond };

const App = () => <TitleSecond title="example" />;
export { App };