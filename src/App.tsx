import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import TodoForm from './components/TodoForm';
import TodoFormRef from './components/TodoFormRef';

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const addHandler = (title: string) => {
    console.info('Add new ToDo', title);
  }

  return (
    <>
    <Navbar />
    <div className="container">
      <TodoFormRef onAdd={addHandler} />
    </div>
    </>
  );
}

export default App;
