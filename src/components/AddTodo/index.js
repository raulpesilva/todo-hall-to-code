import { useState } from 'react';
import { Button } from '../Button';
import * as S from './styles';

export const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleAddTodo = () => {
    addTodo((estadoAnterior) => [value, ...estadoAnterior]);
  };
  return (
    <S.Container>
      <S.Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button label="add" size="small" onClick={handleAddTodo} />
    </S.Container>
  );
};
