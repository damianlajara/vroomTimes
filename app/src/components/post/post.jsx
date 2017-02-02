import React from 'react';

export default function Post() {
  return (
    <div className="col-md-12 col-lg-6">
      <div className="row post">
        <div className="col-md-6 media">
          <img src="http://placehold.it/500x350/EEE" className="img-responsive"/>
        </div>
        <div className="col-md-6 post-caption">
          <span className="post-tag">Article</span>
          <a href="post-image.html" className="post-title">Don't look at me</a>
          <span className="post-date">19 Sept 2015</span>
          <p className="post-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis <a href="#">parturient montes</a>, nascetur ridiculus mus. Aenean commodo ligula eget dolor.</p>
        </div>
      </div>
    </div>
  )
}
