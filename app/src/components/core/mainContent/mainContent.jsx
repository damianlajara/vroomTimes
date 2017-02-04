import React from 'react';
import Featured from '../../featured';
import { Column, Sidebar } from '../../lib';
import { isEmpty, pullAt } from 'lodash';

const renderColumns = (mainColumns = []) => {
  if(mainColumns.length > 0){
    return mainColumns.map(({ name, collections }, i) => <Column key={i} title={name} collections={collections} />)
  }
}

export default function MainContent({ columns }) {
  const mainColumns = columns.slice(0, columns.length-1);
  const [sideColumn = []] = columns.slice(-1);
  let firstSlide = {};
  let secondSlide = {};
  if(mainColumns.length > 0) {
    // Modify inline so it wont show up twice in featured and in columns
    [ firstSlide, secondSlide ] = pullAt(mainColumns[0].collections[4].assets, [0, 1]);
  }
  const slides = !isEmpty(firstSlide) && !isEmpty(secondSlide) ? [firstSlide, secondSlide] : []
  return (
    <div className="row main-content">
      <div className="col-md-8">
        <Featured slides={slides} />
        { renderColumns(mainColumns) }
      </div>
      <div className="col-md-4">
        <Sidebar sideColumn={sideColumn} />
      </div>
    </div>
  )
}
