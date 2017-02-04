import React from 'react';
import { some } from 'lodash/collection';

/* *
 * Private
 */

 // Lazy evaluate types when we know they exist
const getImageTypes = (post) => post.images[0].types;

// Display an image with the given options and optional styles
const _displayImage = ({ content, caption } = {}, styles = {}) => {
  return <img src={`https://static01.nyt.com/${content}`} alt={caption} className="img-responsive" style={{...styles}} />
}

// Create and format a dynamic regex
const constructRegex = (regex) => new RegExp(regex,'i');

// Regex Patterns for different image sizes
const defaultImageRegex = 'square320';
const featuredImageRegex = 'superjumbo';
const inlineImageRegex = 'thumb';

/* *
 * Public Interface - Exported Functions
 */

// Only take collections that are NOT excluded from the feed or that HAVE assets
export function filterCollections(collections) {
  return collections.filter(({ excludedFromFeed, assets, renderStyle}) => {
    return !(excludedFromFeed || /ads/i.test(renderStyle) || assets.length < 1);
  });
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

// Checks if post has any images
export function postHasImage({ images = [] }) {
  return images && images.length > 0;
}

// Checks to see if the post has either a 320x320 image for the post of a jumbo for featured
export function hasDefaultImage(post) {
  const { images } = post;
  return postHasImage(post) && some(images[0].types, ({ type }) => constructRegex(`${defaultImageRegex}|${featuredImageRegex}`).test(type));
}

// Checks to see if the post has at least a thumb image to display inline
// Note: last resort before omitting the rendering of an image altogether
export function hasInlineImage(post) {
  const { images } = post;
  return postHasImage(post) && some(images[0].types, ({ type }) => constructRegex(inlineImageRegex).test(type));
}

// Displays the inline image
export function renderInlineImage(types) {
  const img = types[0];
  return _displayImage(img, { float: 'left', marginRight: '4px' });
}

// Displays the 320x320 (defualt) image
export function renderDefaultImage(types) {
  const img = types[0];
  return _displayImage(img);
}

// Given a post, it checks if it has attached images. If It does it renders a square image or a jumbo one
export function renderImage(post, { featured = false, type = '' } = {}) {
  // Type can either be 'inline' or 'default'
  // If type was passed in, then do not validate since we assume it was done manually
  if(type === 'inline') {
    return renderInlineImage(getImageTypes(post));
  } else if(type === 'default') {
    return renderDefaultImage(getImageTypes(post));
  }

  let image = null;
  if(hasDefaultImage(post)) {
    const imgTypes = getImageTypes(post).filter(({ type }) => featured ? constructRegex(featuredImageRegex).test(type) : constructRegex(defaultImageRegex).test(type));
    if(imgTypes.length > 0) {
      image = renderDefaultImage(imgTypes);
    }
  } else if(hasInlineImage(post)) {
    const imgTypes = getImageTypes(post).filter(({ type }) => constructRegex(inlineImageRegex).test(type));
    if(imgTypes.length > 0) {
      image = renderInlineImage(imgTypes);
    }
  }
  return image;
}
