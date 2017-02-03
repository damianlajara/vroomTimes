import React from 'react';
import { postHasImage, renderImage } from '../../helpers/utils.js';

export default function Post({ post = {}}) {
  const hasImage = postHasImage(post);
  return (
    // <div className="col-md-12 col-lg-6">
    <div className={`col-md-${hasImage ? 12 : 6} col-lg-${hasImage ? 6 : 3}`}>
      <div className="row post">
        {
          hasImage &&
          <div className="col-md-6">
            { renderImage(post) }
          </div>
        }
        <div className={`col-md-${hasImage ? 6 : 12} post-caption`}>
          <span className="post-tag">{post.desk || post.type || post.typeOfMaterial}</span>
          <a href={post.url} className="post-title">{post.headline}</a>
          <span className="post-date">{post.publicationDt}</span>
          <p className="post-description">{post.summary}</p>
        </div>
      </div>
    </div>
  )
}
