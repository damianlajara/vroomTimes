import React from 'react';
import { partition, isEmpty } from 'lodash';
import Post from '../../post';
import { filterCollections, hasDefaultImage, hasInlineImage, swap, flatten } from '../../../helpers/utils.js';
import './column.scss';

const mergeClearablePost = (content, rowSpace = 12) => Object.assign({}, { clear: rowSpace > 0 && rowSpace % 12 === 0 }, { content });

const collectionHasItems = (collection) => !isEmpty(collection);

// Sorts and Orders every post in a grid where every imgPost occupies 6 rowSpace and every txtPost occupies 3 rowSpace.
// Note: This fixes the problem of the grid misplacing posts on large screen sizes due to varying post sizes
// See: http://stackoverflow.com/questions/25598728/irregular-bootstrap-column-wrapping
const sortPosts = function(posts = []) {
  const [imgPosts, txtPosts] = partition(posts, hasDefaultImage);
  let lastTxtPost = null;
  let sortedPosts = [];

  const IMG_POST_ROW_SPACE = 6;
  const TXT_POST_ROW_SPACE = 3;
  let rowSpace = 0;

  // Check to see if txtPosts are odd. If they are, simply remove the last txtPost and save it so we can add it to the end of the rows
  // This will make the remaining txtPosts even so they fit in the sorting row of one imgPost followed by two txtPosts
  console.log("txt post length!", txtPosts.length);
  if(txtPosts.length % 2 !== 0 && collectionHasItems(txtPosts)) {
    console.log("txt post is odd!", txtPosts.length);
    lastTxtPost = txtPosts.pop();
  }

  // While there is still txtPosts AND imgPosts, then order/sort them
  // Sort them as: one imgPost followed by two txtPosts
  while(collectionHasItems(txtPosts) && collectionHasItems(imgPosts)) {
    // Note: since we are inline modifying imgPosts and txtPosts, we have to make sure they have content before we pop items off
    if(collectionHasItems(imgPosts)) {
      sortedPosts.push(mergeClearablePost(imgPosts.pop(), rowSpace));
      rowSpace += IMG_POST_ROW_SPACE;
    }
    if(collectionHasItems(txtPosts)) {
      sortedPosts.push(mergeClearablePost(txtPosts.pop(), rowSpace));
      rowSpace += TXT_POST_ROW_SPACE;
    }
    if(collectionHasItems(txtPosts)) {
      sortedPosts.push(mergeClearablePost(txtPosts.pop(), rowSpace));
      rowSpace += TXT_POST_ROW_SPACE;
    }
  }

  // If we ran out of txtPosts, but we still have imgPosts
  // then simply sort them as: two imgPosts in each row
  if(collectionHasItems(imgPosts)) {
    const imagePosts = imgPosts.map((post, i) => {
      const newPost = mergeClearablePost(post, rowSpace);
      rowSpace += IMG_POST_ROW_SPACE;
      return newPost;
    });
    sortedPosts = sortedPosts.concat(imagePosts);
  }

  // If there is only one txtPost, then simply add it last
  if(lastTxtPost) {
    sortedPosts = sortedPosts.concat(mergeClearablePost(lastTxtPost, rowSpace));
  }

  return sortedPosts;
}

export default function Column({ title, collections = [] }) {
  const filteredCollections = filterCollections(collections);
  const posts = flatten(filteredCollections.map(({ assets }) => assets));
  const filteredPosts = posts.filter(({ type }) => !/singlead|html|sectionfrontvideoplayer/i.test(type));
  return (
    <div className="columns">
      <h3 className="column-title" id={title}>{title}</h3>
      <div className="row">
        { sortPosts(filteredPosts).map((post, i) => <Post post={post} key={i} />) }
      </div>
    </div>
  )
}
