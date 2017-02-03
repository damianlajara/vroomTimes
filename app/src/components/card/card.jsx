import React from 'react';
import { postHasImage, renderImage } from '../../helpers/utils.js';

export default function Card({ post = {}}) {
  return (
    <div className="col-md-12">
        <div className="card" style={{padding: 0}}>
          { postHasImage(post) && renderImage(post) }
          <div className="card-content caption">
            <h4 className="card-title">{post.headline}</h4>
            <div dangerouslySetInnerHTML={{__html: post.body}} />
            <p>{post.summary}</p>
          </div>
          <div className="card-action">
            <a>{post.type}</a>
          </div>
        </div>
      </div>
  )
}
