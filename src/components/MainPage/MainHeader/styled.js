import styled from 'styled-components';

export const AddClients = styled.button`
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

export const Export = styled.div`
  display: flex;
  align-items: center;

  & > .export_title {
    color: #5d54a4;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

export const ExporDropDown = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;

  & > li {
    & > a {
      display: inline-block;
      color: white;
      text-align: center;
      text-decoration: none;
    }
  }

  /* dropdown LI */
  & > .dropdown {
    display: inline-block;
    text-align: center;

    & > .dropdown-content {
      display: none;
      position: absolute;
      z-index: 1000000;
      right: 110px;
      & > a {
        color: black;
        padding: 10px 10px;
        text-decoration: none;
        display: block;
        text-align: center;
        font-size: 12px;
      }
    }

    & > .dropbtn {
      display: flex;
      color: #5d54a4;
      text-align: center;
      transform: rotate(90deg);
    }

    &:hover .dropdown-content {
      display: block;
    }

    & > .dropdown-content a:hover {
      background-color: #ddd;
    }

    & > .dropdown:hover .dropdown-content {
      display: block;
    }

    & > .dropdown:hover .dropbtn {
      background-color: #3e8e41;
    }
  }
`;
