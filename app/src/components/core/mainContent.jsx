import React from 'react';
import Featured from '../featured';
import { Column, Sidebar } from '../lib';

const renderColumns = (mainColumns = []) => {
  if(mainColumns.length > 0){
    return mainColumns.map(({ name, collections }, i) => <Column key={i} title={name} collections={collections} />)
  }
}

const isEmpty = (obj) => Object.getOwnPropertyNames(obj).length == 0;

export default function MainContent({ columns }) {
  console.log("received columns: ", columns);
  const mainColumns = columns.slice(0, columns.length-1);
  console.log("main columns: ", mainColumns);
  const [sideColumn = []] = columns.slice(-1);
  console.log("side column: ", sideColumn);
  let firstSlide = {};
  let secondSlide = {};
  if(mainColumns.length > 0) {
    // TODO: Try to modify inline the original content,
    // so it wont show up twice in featured and in columns
    // Maybe do something like:
    // firstSlide = mainColumns[0].collections.splice(0,1)[0];
    // secondSlide = mainColumns[0].collections.splice(3,1)[0];
    console.log("main columns length > 0", mainColumns.length > 0);
    firstSlide = mainColumns[0].collections[0];
    secondSlide = mainColumns[0].collections[4];
  }
  console.log("first slide: ", firstSlide);
  console.log("second slide: ", secondSlide);
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
