import React from 'react';
export default function Card() {
  return (
    <div className="col-md-12">
        <div className="card" style={{padding: 0}}>
          <img className="media img-responsive" src="http://placehold.it/450x250/EEE"/>
          <div className="card-content caption">
            <h4 className="card-title">Thumbnail label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
          </div>
          <div className="card-action">
            <a href="#" target="new_blank">Read More</a>
          </div>
        </div>
      </div>
  )
}
