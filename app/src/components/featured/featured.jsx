import React from 'react';
import { renderImage } from '../../helpers/utils.js';
import './featured.scss';

export default function Featured({ slides = [] }) {
  return (
    <div className="row featured">
      <div className="col-md-12">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            {
              slides && slides.length > 0 &&
              slides.map((slide, i) => {
                return (
                  <div key={i} className={`item ${i === 0 ? 'active' : ''}`}>
                    { renderImage(slide, { featured: true }) }
                    <div className="carousel-caption">
                      <h3>{slide.headline}</h3>
                      <p>{slide.summary}</p>
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
