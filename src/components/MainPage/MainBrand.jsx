import React from 'react';
import styled, { css } from 'styled-components';

const BrandTxt = styled.div`
  ${(props) =>
    props.deni &&
    css`
      font-size: 30px;
      font-weight: 400;

      &:first-letter {
        font-weight: 700;
        color: #9d65c9;
      }
    `}
`;

function MainBrand(props) {
  return <BrandTxt {...props} />;
}

export default MainBrand;
