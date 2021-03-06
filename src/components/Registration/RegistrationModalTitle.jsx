import React from 'react';
import styled from 'styled-components';

const RegistrationTitle = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 20px;
`;

function RegistrationModalTitle(props) {
  return <RegistrationTitle {...props} />;
}

export default RegistrationModalTitle;
