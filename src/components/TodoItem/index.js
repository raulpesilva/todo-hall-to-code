import { Checkbox } from '../Checkbox';
import * as S from './styles';

export const TodoItem = ({ label }) => {
  return (
    <S.Container>
      <Checkbox />
      <S.Text>{label}</S.Text>
    </S.Container>
  );
};
