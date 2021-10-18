import React, { useRef } from 'react';

interface TodoFormProps {
  onAdd(tite: string): void
}

export const TodoFormRef: React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.info(ref?.current!.value);
      props.onAdd(ref?.current!.value);
      ref.current!.value = '';
    }
  }

  return (
    <div className="input-field mt2">
      <input
      onKeyPress={keyPressHandler}
      ref={ref}
      placeholder="Введите название дела" 
      type="text" 
      id="title" />
      <label htmlFor="title" className="active">Введите название дела</label>
    </div>
  )
}

export default TodoFormRef;