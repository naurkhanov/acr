import React from 'react';
import { ExporDropDown, Export } from './styled';

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
