import React from 'react';
import styled from 'styled-components';

const Export = styled.div`
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

const ExporDropDown = styled.ul`
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

      & > a {
        color: black;
        padding: 10px 10px;
        text-decoration: none;
        display: block;
        text-align: center;
        font-size: 12px;

        &:hover {
          background-color: #f1f1f1;
        }
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

function MainExport(props) {
  return (
    <Export>
      <div className="export_title">Export</div>
      <ExporDropDown>
        <div className="dropdown">
          <span className={'material-icons dropbtn'}>chevron_right</span>
          <div className="dropdown-content">
            <a href="#">Выгрузить в Excel</a>
            <a href="#">Выгрузить в Word</a>
          </div>
        </div>
      </ExporDropDown>
    </Export>
  );
}

export default MainExport;
