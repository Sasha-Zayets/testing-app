import React from 'react';
import sprite from '../../assets/img/icons/sprite.svg';

const SvgSprite = ({
 className, name, active, onClick, ...rest
}) => (
  <svg className={className} onClick={onClick} {...rest}>
    <use href={`${sprite}#${name}`} />
  </svg>
);

export default SvgSprite;