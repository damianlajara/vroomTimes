import React from 'react';
import { renderImage } from '../../helpers/utils.js';

export default function Featured({ slides = [] }) {
  console.log("slides: ", slides);
  return (
    <div className="row featured">
      <div className="col-md-12">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

          <div className="carousel-inner" role="listbox">
            {
              slides && slides.length > 0 &&
              slides.map((slide, i) => {
                console.log("slide: ", slide);
                console.log("post: ", slide.assets);
                let content = slide.assets[0];
                return (
                  <div key={i} className={`item ${i === 0 ? 'active' : ''}`}>
                    {renderImage(content, true)}
                    <div className="carousel-caption">
                      <h3>{content.headline}</h3>
                      <p>{content.summary}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>

          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}
