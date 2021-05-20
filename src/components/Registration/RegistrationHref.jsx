import React from 'react';
import styled, { css } from 'styled-components';

const Href = styled.a`
  ${(props) =>
    props.registrationhref &&
    css`
      color: #5d54a4;
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    `}
`;

function RegistrationHref(props) {
  return <Href {...props} />;
}

export default RegistrationHref;
