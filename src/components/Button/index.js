import React from 'react';

import * as S from './styles';

export const Button = ({ label, size, ...props }) => {
  return (
    <S.Button size={size} {...props}>
      {label}
    </S.Button>
  );
};
