import React from 'react';
import Featured from '../featured';
import { Column, Sidebar } from '../lib';

const renderColumns = (mainColumns = []) => {
  if(mainColumns.length > 0){
    return mainColumns.map(({ name, collections }, i) => <Column key={i} title={name} collections={collections} />)
  }
}

export default function MainContent({ columns }) {
  console.log("received columns: ", columns);
  const mainColumns = columns.slice(0, columns.length-1);
  console.log("main columns: ", mainColumns);
  const [sideColumn = []] = columns.slice(-1);
  console.log("side column: ", sideColumn);
  let firstSlide = {};
  let secondSlide = {};
  if(mainColumns.length > 0) {
    console.log("main columns length > 0", mainColumns.length > 0);
    firstSlide = mainColumns[0].collections[0];
    secondSlide = mainColumns[0].collections[3];
  }
  console.log("first slide: ", firstSlide);
  console.log("second slide: ", secondSlide);
  return (
    <div className="row main-content">
      <div className="col-md-8">
        <Featured slides={[firstSlide, secondSlide]} />
        { renderColumns(mainColumns) }
      </div>
      <div className="col-md-4">
        <Sidebar sideColumn={sideColumn} />
      </div>
    </div>
  )
}
