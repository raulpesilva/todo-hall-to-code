import { Button } from './components/Button';
import { Card } from './components/Card';
import { Checkbox } from './components/Checkbox';
import { Header } from './components/Header';
import { Todo } from './components/Todo';
import { TodoItem } from './components/TodoItem';
import { AddTodo } from './components/AddTodo';

import * as S from './styles';
import { useState } from 'react';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  return (
    <S.Container>
      <Header title="Simple Todo" />
      <AddTodo addTodo={setTodoItems} />
      <Todo>
        {todoItems.map((todo) => (
          <TodoItem label={todo} />
        ))}
      </Todo>
    </S.Container>
  );
}

export default App;

// yarn create react-app nome-do-app
