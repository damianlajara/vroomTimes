import React from 'react';
import { hasDefaultImage, hasInlineImage, renderImage } from '../../helpers/utils.js';
import './post.scss';

export default function Post({ post : postWrapper = {}}) {
  const post = postWrapper.content;
  const hasDefaultImg = hasDefaultImage(post);
  const hasInlineImg = hasInlineImage(post);
  return (
    <div className={`article col-md-${hasDefaultImg ? 12 : 6} col-lg-${hasDefaultImg ? 6 : 3}${postWrapper.clear ? ' complete' : ''}`}>
      <div className="row post">
        {
          hasDefaultImg &&
          <div className="col-md-6 image">
            { renderImage(post, { type: 'default' }) }
          </div>
        }
        <div className={`col-md-${hasDefaultImg ? 6 : 12} post-caption`}>
          <span className="post-tag">{post.desk || post.type || post.typeOfMaterial}</span>
          <a href={post.url} className="post-title">{post.headline}</a>
          <span className="post-date">{post.publicationDt ? post.publicationDt.slice(0,10) : ''}</span>
          <p className="post-description">
            {
              !hasDefaultImg && hasInlineImg && renderImage(post, { type: 'inline' })
            }
            {post.summary}
          </p>
        </div>
      </div>
    </div>
  )
}
