import React from 'react';
import styled from 'styled-components';

const RegistrationModalIcon = styled.div`
  width: 500px;
  padding: 75px 20px 25px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

function RegistrationModal(props) {
  return <RegistrationModalIcon {...props} />;
}

export default RegistrationModal;
