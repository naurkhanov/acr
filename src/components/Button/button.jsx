import React from 'react';
import { StyledButton } from './styled';

function Button(props) {
  return (
    <div>
      <StyledButton {...props} onClick={props.click} />
    </div>
  );
}

export default Button;
