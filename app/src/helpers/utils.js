import React from 'react';

// Only take collections that are NOT excluded from the feed or that HAVE assets
export function filterCollections(collections) {
  return collections.filter(({ excludedFromFeed, assets, renderStyle}) => {
    return !(excludedFromFeed || /ads/i.test(renderStyle) || assets.length < 1);
  });
}

// Checks if post has any images
export function postHasImage({ images = []}) {
  return images && images.length > 0;
}

// Swaps elements inside an array
export function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
  return arr;
}

// Flattens given array
export function flatten(arr) {
  return arr.reduce((a, b) => a.concat(b), []);
}

// Given a post, it checks if it has attached images. If It does it renders a square image or a jumbo one
export function renderImage(post, featured=false) {
  let image = null;
  if(postHasImage(post)) {
    const imgTypes = post.images[0].types.filter(({ type }) => featured ? /superJumbo/i.test(type) : /square320/i.test(type));
    if(imgTypes.length > 0) {
      image = <img src={`https://static01.nyt.com/${imgTypes[0].content}`} alt={imgTypes[0].caption} className="img-responsive"/>
    }
  }
  return image;
}
