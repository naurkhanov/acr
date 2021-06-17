import styled from 'styled-components';

export const RegistrationFormLogin = styled.input`
  width: 100%;
  height: 60px;
  font-size: 18px;
  font-weight: 300;
  padding: 20px 20px 20px 20px;
  outline: #9d65c9;
  border-radius: 5px;
  border: none;
  margin-top: 11px;
  &:focus {
    border: 1px solid #9d65c9;
  }
`;

export const RegistrationFormPassword = styled(RegistrationFormLogin)`
  margin-top: 20px;
  font-weight: 300;
`;

export const SpinnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const InputWrapper = styled.div`
  & > .inputWrap {
    & > span {
      position: absolute;
      width: 16px;
      height: 16px;
      top: 208px;
      left: 440px;
      cursor: pointer;
    }
  }
`;
