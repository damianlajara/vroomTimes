import React from 'react';
import './header.scss';

export default function Header({ columnTitles = []}) {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Vroom Times</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            {
              columnTitles.map((title, i) => <li key={i}><a href={`#${title}`}>{title.slice(1).concat(` ${title.slice(0,1).toUpperCase()}`)}</a></li>)
            }
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="https://www.nytimes.com/">Visit N.Y Times</a></li>
                <li><a href="https://www.nytimes.com/section/nyregion?action=click&contentCollection=N.Y.&module=SectionsNav&pgtype=Homepage&region=TopBar&version=BrowseTree">Visit NY Region</a></li>
                <li role="separator" className="divider"></li>
                <li><a>Damian Lajara</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
