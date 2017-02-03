import React from 'react';
import Post from '../post';
import { filterCollections, postHasImage, swap, flatten } from '../../helpers/utils.js';

const sortPosts = function(posts = []) {
  const imgPosts = posts.filter((post) => postHasImage(post));
  const txtPosts = posts.filter((post) => !postHasImage(post));
  let lastTxtPost = null;

  if(txtPosts % 2 !== 0 && txtPosts.length > 1) {
    lastTxtPost = txtPosts.pop();
  }
  let temp = [];

  if(txtPosts.length > 0 && imgPosts.length > 0) {
    while(imgPosts.length > 0 && imgPosts.length > 0) {
      if(imgPosts.length > 0) temp.push(imgPosts.pop());
      if(txtPosts.length > 0) temp.push(txtPosts.pop());
      if(txtPosts.length > 0) temp.push(txtPosts.pop());
    }
  }
  if(imgPosts.length > 0) {
    temp.concat(imgPosts);
  }
  if(lastTxtPost) {
    temp.concat(lastTxtPost);
  }
  return temp;
}

export default function Column({ title, collections = [] }) {
  const filteredCollections = filterCollections(collections);
  const posts = flatten(filteredCollections.map(({ assets }) => assets));
  const filteredPosts = posts.filter(({ type }) => !/singlead|html|sectionfrontvideoplayer/i.test(type));
  return (
    <div className="columns">
      <h3 className="column-title" id={title}>{title}</h3>
      <div className="row">
        {
          sortPosts(filteredPosts).map((post, i) => <Post post={post} key={i} />)
        }
      </div>
    </div>
  )
}
