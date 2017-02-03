import React from 'react';
import Card from '../card';
import { filterCollections, flatten } from '../../helpers/utils.js';

export default function Sidebar({ sideColumn: { collections = [] } }) {
  const filteredCollections = filterCollections(collections);
  const posts = flatten(filteredCollections.map(({ assets }) => assets));
  // console.log("sidebar posts: ", posts);
  const filteredPosts = posts.filter(({ slugname }) => !/singleruledivider|events guide|mostpopular/i.test(slugname));
  // console.log("sidebar filtered posts: ", filteredPosts);
  return (
    <div className="row side-content">
      <h3 id="cColumn" className="title">News</h3>
      {
        filteredPosts.map((post, i) => <Card key={i} post={post} />)
      }
    </div>
  )
}
