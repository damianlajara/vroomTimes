import React from 'react';
export default function Featured() {
  return (
    <div className="row featured">
      <div className="col-md-12">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="http://html.crunchpress.com/materialmag/images/fsimg3.jpg" alt="..."/>
              <div className="carousel-caption">
                <h3>Header</h3>
                <p>Caption</p>
              </div>
            </div>
            <div className="item">
              <img src="http://html.crunchpress.com/materialmag/images/fsimg2.jpg" alt="..."/>
              <div className="carousel-caption">
                <h3>Header</h3>
                <p>Caption</p>
              </div>
            </div>

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
