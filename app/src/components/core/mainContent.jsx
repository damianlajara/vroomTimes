import React from 'react';
import Featured from '../featured';
import { Column, Sidebar } from '../lib';

const renderColumns = mainColumns => mainColumns.map(({ name, collections }, i) => <Column key={i} title={name} collections={collections} />)

export default function MainContent({ columns }) {
  const mainColumns = columns.slice(0, -1);
  const [sideColumn = []] = columns.slice(-1);
  return (
    <div className="row main-content">
      <div className="col-md-8">
        <Featured />
        { renderColumns(mainColumns) }
      </div>
      <div className="col-md-4">
        <Sidebar sideColumn={sideColumn} />
      </div>
    </div>
  )
}
