import styled from 'styled-components';

export const Background = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  width: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding: 30px 30px;
`;

export const ModalHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    font-size: 24px;
    font-weight: 500;
  }

  & > span {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const NameInputWrap = styled.div`
  margin-top: 11px;

  & > input {
    width: 100%;
    height: 60px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 20px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const SumPaymentsWrap = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;

  & > input {
    width: 48%;
    height: 60px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 20px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
  }

  & > .dropDownWrap {
    width: 48%;
    height: 60px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 18px;
    box-sizing: border-box;
    outline: none;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    font-size: 18px;
  }
`;

export const CommentWrap = styled.div`
  margin-top: 20px;

  & > input {
    width: 100%;
    height: 120px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 0 70px 20px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const TimePay = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  & > .timePay {
    font-weight: 400;
    font-size: 18px;
  }

  & > .week {
    margin-left: 10px;
    color: #5d54a4;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonAdd = styled.button`
  width: 170px;
  height: 60px;
  background-color: #9d65c9;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 20px;
  margin-top: 20px;
  border: 1px solid grey;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
`;

export const DropdownWrap = styled.div`
  width: 48%;
  height: 60px;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 18px;
  box-sizing: border-box;
  outline: none;
`;
export const DropdownObject = styled.div`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
`;

export const DropdownIconWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & > span {
    margin-left: 5px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const InitialInputWrap = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  & > input {
    width: 30%;
    height: 35px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 20px;
    font-size: 18px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const SocialInfoWrap = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  & > .countryCode {
    width: 20%;
    height: 35px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 20px;
    font-size: 18px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }
  & > .number {
    width: 30%;
    height: 35px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 20px;
    font-size: 18px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }

  & > .mail {
    width: 45%;
    height: 35px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 20px;
    font-size: 18px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const PassportInputWrap = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  & > .passportNumber {
    width: 35%;
    height: 35px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 20px;
    font-size: 18px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }

  & > .passportSerial {
    width: 62%;
    height: 35px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 20px;
    font-size: 18px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const CityInfWrap = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  & > .city {
    width: 30%;
    height: 35px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 20px;
    font-size: 18px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }

  & > .adress {
    width: 66%;
    height: 35px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    outline: none;
    padding: 20px 20px;
    font-size: 18px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }
`;
