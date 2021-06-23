import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
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
  
  ${(props) =>
    props.addpayments &&
    css`
      width: 170px;
      height: 60px;
      background-color: #9d65c9;
      color: #fff;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: 20px;
      margin-top: 20px;
    `}
  
  ${(props) =>
    props.addClient &&
    css`
      width: 150px;
      height: 50px;
      background-color: #9d65c9;
      color: #fff;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: 20px;
      margin-top: 20px;
    `}
`;
