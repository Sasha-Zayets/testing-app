import React from 'react';
import {
  Wrapper,
  TableBlock,
  HeaderBlock,
  Th,
} from './styles';

const Table = ({ children, headerRender }) => (
  <Wrapper>
    <TableBlock>
      <HeaderBlock>
        {
          headerRender && (
            headerRender()
          )
        }
      </HeaderBlock>
      { children }
    </TableBlock>
  </Wrapper>
);

export default Table;
