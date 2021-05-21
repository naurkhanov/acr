import React from 'react';
import styled, { css } from 'styled-components';

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.registrationhref &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 30px;
    `}

  ${(props) =>
    props.headerWrap &&
    css`
      flex-direction: row;
    `}
`;

function Wrapper(props) {
  return <ButtonWrap {...props} />;
}

export default Wrapper;
