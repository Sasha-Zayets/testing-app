import styled from 'styled-components';

export const Wrapper = styled.div``;

export const TableBlock = styled.div`
  border: none;
  border-spacing: 0;
  width: 100%;
`;

export const Tr = styled.tr``;

export const Th = styled.div``;

export const HeaderBlock = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: black;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  
  div {
    width: 150px;
    
    &:first-child {
      width: 350px;
    }
  }
`;

