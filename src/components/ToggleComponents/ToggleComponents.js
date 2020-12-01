import React, { useState } from 'react';
import {
  Wrapper,
  Block,
  Header,
  Button,
  ChildrenBlock,
} from './styles';
import SvgSprite from '../SvgSprite';

const ToggleComponents = ({
  showButton = true,
  headerRender,
  renderHeaderOthers,
  active = false,
  children,
  blockHeaderStyles,
  ...otherProps
}) => {
  const [toggle, setToggle] = useState(active);

  const onChange = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <>
      <Header {...otherProps}>
        <Block style={blockHeaderStyles}>
          {
            showButton && (
              <Button onClick={onChange} active={toggle}>
                <SvgSprite name="next" />
              </Button>
            )
          }
          { headerRender() }
        </Block>
        { renderHeaderOthers() }
      </Header>
      <ChildrenBlock
        display={toggle ? 'block': 'none'}
      >{ children }</ChildrenBlock>
    </>
  )
};

export default ToggleComponents;
