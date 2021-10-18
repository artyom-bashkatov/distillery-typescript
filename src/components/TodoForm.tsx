import React, { useState } from 'react';

export const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.info(title);
      setTitle('');
    }
  }

  return (
    <div className="input-field mt2">
      <input
      onChange={changeHandler}
      onKeyPress={keyPressHandler}
      value={title} 
      placeholder="Введите название дела" 
      type="text" 
      id="title" />
      <label htmlFor="title" className="active">Введите название дела</label>
    </div>
  )
}

export default TodoForm;