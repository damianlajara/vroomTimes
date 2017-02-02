import React from 'react';
import Card from '../card';
import { filterCollections } from '../../helpers/utils.js';

export default function Sidebar({ sideColumn: { collections = [] } }) {
  const filteredCollections = filterCollections(collections);
  return (
    <div className="row side-content">
      <h3 className="column-title" id="columnC" className="title">News</h3>
      {
        filteredCollections.map((content, i) => <Card key={i} />)
      }
    </div>
  )
}
