import React from 'react';
import Card from '../../card';
import { filterCollections, flatten } from '../../../helpers/utils.js';
import './sidebar.scss';

export default function Sidebar({ sideColumn: { collections = [] } }) {
  const filteredCollections = filterCollections(collections);
  const posts = flatten(filteredCollections.map(({ assets }) => assets));
  const filteredPosts = posts.filter(({ slugname }) => !/singleruledivider|events guide|mostpopular/i.test(slugname));
  return (
    <div className="row side-content">
      <h3 id="cColumn" className="title">News</h3>
      { filteredPosts.map((post, i) => <Card key={i} post={post} />) }
    </div>
  )
}
