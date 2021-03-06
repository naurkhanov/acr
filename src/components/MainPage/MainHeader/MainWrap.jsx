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
  ${(props) =>
    props.export &&
    css`
      display: flex;
      align-items: center;
    `}
`;

function MainWrap(props) {
  return <Wrapper {...props} />;
}

export default MainWrap;
