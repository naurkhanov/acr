import React from 'react';
import styled from 'styled-components';

const AddClients = styled.button`
  border: 1px solid grey;
  width: 205px;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  background-color: #9d65c9;
  margin-left: 30px;
  &:hover {
    background-color: #fff;
    box-shadow: 0 0 10px 1px rgba(157, 101, 201, 0.5);
    color: #9d65c9;
    transition: 500ms;
  }
`;

function AddClientsButton(props) {
  return <AddClients {...props} />;
}

export default AddClientsButton;
