import * as S from './styles';

export const Header = ({ title }) => {
  return (
    <S.Container>
      <S.MenuIcon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
