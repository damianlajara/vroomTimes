import React from 'react';
import Post from '../post';
import { filterCollections } from '../../helpers/utils.js';

export default function Column({ title, collections = [] }) {
  const filteredCollections = filterCollections(collections);
  const posts = filterCollections.map(({ assets }) => assets);
  return (
    <div>
      <h3 className="column-title" id="ColumnA">{title}</h3>
      <div className="row">
        {
          filteredCollections.map((content, i) => <Post content={content.assets} key={i} />)
        }
      </div>
    </div>
  )
}
