import React from 'react';

export default function Post({ post }) {
  return (
    <div className="col-md-12 col-lg-6">
      <div className="row post">
        <div className="col-md-6 media">
          {
            post.images &&
            const image = post.images[0].map(({ types }) => types.filter(({ type }) => /articleLarge|hpLarge/i.test(type)))[0] &&
            <img src={`https://static01.nyt.com/${image.content}`} alt={image.caption} className="img-responsive"/>
          }
        </div>
        <div className="col-md-6 post-caption">
          <span className="post-tag">{post.desk || post.type || post.typeOfMaterial}</span>
          <a href={post.url} className="post-title">{post.headline}</a>
          <span className="post-date">{post.publicationDt}</span>
          <p className="post-description">{post.summary}</p>
        </div>
      </div>
    </div>
  )
}
