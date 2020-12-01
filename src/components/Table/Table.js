import React from 'react';
import {
  Wrapper,
  TableBlock,
  HeaderBlock,
  Tr,
  Th,
} from './styles';

const Table = ({ children }) => (
  <Wrapper>
    <TableBlock>
      <HeaderBlock>
        <Th>Техника</Th>
        <Th>33,59</Th>
        <Th>43:31:00</Th>
        <Th>21:30:00</Th>
        <Th>22:01:00</Th>
      </HeaderBlock>
      { children }
    </TableBlock>
  </Wrapper>
);

export default Table;
