import styled, { css } from 'styled-components';

export const Wrapper = styled.tr``;

export const Block = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  font-weight: 700;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 10px;
  font-weight: 700;
`;

export const Button = styled.button`
  margin-right: 10px;
  border: 1px solid black;
  width: 15px;
  height: 15px;
  padding: 0;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    width: 8px;
    height: 8px;
    transition: all .3s;
    transform: rotate(0);
  }
  
  &:active,
  &:focus {
    outline: none;
  }
  
  ${({ active }) => (
    active
      ? css`
        svg {
          transform: rotate(180deg);
        }
      `
      : null
  )}
`;

export const ChildrenBlock = styled.div`
  overflow: hidden;
  transition: all .3s;
  ${({ display }) => css`
    display: ${display};
  `}
`;

