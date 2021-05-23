import React from 'react';
import styled, { css } from 'styled-components';

const Section = styled.div`
  ${(props) =>
    props.header &&
    css`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
`;

function MainSection(props) {
  return <Section {...props} />;
}

export default MainSection;
