import styled from 'styled-components';

export const ExpirationWrap = styled.div`
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

export const Remain = styled.div`
  margin-top: 20px;

  & > .remainTitle {
    font-weight: 400;
    font-size: 18px;
  }

  & > .fromAndTo {
    display: flex;
    justify-content: space-between;
    width: 165px;
    margin-top: 10px;

    & > .from {
      color: #d0d0d0;
    }

    & > .to {
      color: #d0d0d0;
    }
  }

  & > .fromAndToForms {
    width: 260px;
    justify-content: space-between;
    display: flex;
    margin-top: 10px;

    & > input {
      width: 120px;
      height: 61px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      outline: none;
      padding: 20px;
      font-size: 18px;
      font-weight: 300;
      border-radius: 5px;
    }

    & > input::placeholder {
      color: #d0d0d0;
    }
  }
`;

export const Repaid = styled.div`
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

export const LastPaymentWrap = styled.div`
  margin-top: 20px;

  & > .LastPaymentTitle {
    font-weight: 400;
    font-size: 18px;
    color: #000;
  }

  & > .radio_wrap {
    margin-top: 10px;

    & > input[type='radio'] {
      display: none;
    }

    & > label {
      display: inline-block;
      cursor: pointer;
      position: relative;
      padding-left: 25px;
      margin-right: 0;
      line-height: 18px;
      user-select: none;
      font-size: 18px;
      font-weight: 400;
    }

    & > label:before {
      content: '';
      display: inline-block;
      width: 17px;
      height: 18px;
      position: absolute;
      left: 0;
      bottom: 1px;
      background: url('https://snipp.ru/img/radio-1.png') no-repeat;
    }

    & > input[type='radio']:checked + label:before {
      background: url('https://snipp.ru/img/radio-2.png') 0 0 no-repeat;
    }

    & > label:hover:before {
      filter: brightness(120%);
    }

    & > input[type='radio']:disabled + label:before {
      filter: grayscale(100%);
    }
  }
`;

export const SidePanelGeneral = styled.div`
  width: 300px;
  height: 450px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px 20px;
  border-radius: 10px;
`;
