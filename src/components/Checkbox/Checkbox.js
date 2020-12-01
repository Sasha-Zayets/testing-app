import React, { useState, useEffect } from 'react';
import {
  Wrapper,
} from './styles';

const Checkbox = ({ checked = false, onChange }) => {
  const [isCheck, setIsCheck] = useState(checked);

  const change = (event) => {
    const value = event.target.checked;
    setIsCheck(value);
    if (onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    setIsCheck(checked);
  }, [checked]);

  return (
    <Wrapper>
      <input type="checkbox" checked={isCheck} onChange={change} />
    </Wrapper>
  )
};

export default Checkbox;
