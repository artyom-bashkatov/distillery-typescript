import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import TodoForm from './components/TodoForm';
import TodoFormRef from './components/TodoFormRef';
import TodoList from './components/TodoList';
import { ITodo } from './interfaces';

declare var confirm: (question: string) => boolean;

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    };
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  }

  const removeHandler = (id: number) => {
    const shouldRemove = confirm("Уверены, что хотите удалить элемент?");
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <>
    <Navbar />
    <div className="container">
      <TodoFormRef onAdd={addHandler} />
      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </div>
    </>
  );
}

export default App;
