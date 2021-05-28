import { useState } from 'react';
import * as S from './styles.js';

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return <S.Checkbox checked={checked} onClick={toggleCheckbox}></S.Checkbox>;
};
