import React from 'react';
import styled from 'styled-components';

const ExpirationWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  & > .custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  & > .custom-checkbox + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  & > .custom-checkbox + label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #9d65c9;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  & > .custom-checkbox:checked + label::before {
    border-color: #9d65c9;
    background-color: #9d65c9;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }

  & > .expiration {
    font-weight: 400;
    font-size: 18px;
  }
`;

function ExpirationBlock(props) {
  return (
    <ExpirationWrap>
      <input type="checkbox" className="custom-checkbox" id="expiration" />
      <label for="expiration" className="expiration">
        Показать все просрочки
      </label>
    </ExpirationWrap>
  );
}

export default ExpirationBlock;
