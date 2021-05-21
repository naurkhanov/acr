import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${(props) =>
    props.generalWrapper &&
    css`
      width: 90%;
      margin: auto;
      margin-top: 20px;
    `}
`;

function MainWrap(props) {
  return <Wrapper {...props} />;
}

export default MainWrap;
