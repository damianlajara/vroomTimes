import React from 'react';

export default function Header() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Vroom Times</a>
        </div>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#columnA">Column A <span className="sr-only">(current)</span></a></li>
            <li><a href="#columnB">Column B</a></li>
            <li><a href="#columnC">Column C</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Filter <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Most Recent</a></li>
                <li><a href="#">Author</a></li>
                <li><a href="#">A-Z</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
