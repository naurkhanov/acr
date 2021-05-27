import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid grey;
  width: 205px;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  //&:hover {
  //  background-color: #fff;
  //  box-shadow: 0 0 10px 1px rgba(157, 101, 201, 0.5);
  //  color: #9d65c9;
  //  transition: 500ms;
  //}

  ${(props) =>
    props.autorization &&
    css`
      background-color: #9d65c9;
      color: #fff;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: 20px;
      margin-top: 20px;
    `}

  ${(props) =>
    props.timurkaev &&
    css`
      background-color: green;
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: rgba(157, 101, 201, 0.5);
    `}
`;

function Button(props) {
  return (
    <div>
      <StyledButton {...props} onClick={props.click} />
    </div>
  );
}

export default Button;
