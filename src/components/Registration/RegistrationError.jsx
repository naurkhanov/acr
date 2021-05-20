import React from 'react';
import styled, { css } from 'styled-components';

const Error = styled.div`
  ${(props) =>
    props.error &&
    css`
      text-align: center;
      color: red;
      margin-top: 11px;
    `}
`;

function RegistrationError(props) {
  return <Error {...props} />;
}

export default RegistrationError;
