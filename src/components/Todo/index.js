import { Button } from '../Button';
import * as S from './styles';

export const Todo = ({ children }) => {
  return (
    <S.Container>
      {children}
      <S.WrapperButton>
        <Button label="AddTask" />
      </S.WrapperButton>
    </S.Container>
  );
};
