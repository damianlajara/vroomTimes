import React, { Component } from 'react';
import { Header, MainContent, Footer } from '../components';
import '../styles/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: []
    }
  }

  componentWillMount() {
     fetch('../../../dist/api.json')
     .then(response => response.json())
     .then((data) => {
       console.log(data);
       const columns = data.content.filter((content) => /column/i.test(content.name));
       console.log("columns: ", columns);
       const filteredColumns = columns.map(({ collections }) => {
         return collections.filter(({ excludedFromFeed, assets, renderStyle }) => {
           return !(excludedFromFeed || /ads/i.test(renderStyle) || assets.length < 1);
         });
       });
       console.log("filtered columns: ", filteredColumns);
       this.setState({ columns });
     })
  }

  render() {
    const headerTitles = this.state.columns.map((column) => column.name);
    return (
     <div className="container-fluid">
       <Header columnTitles={headerTitles} />
       <MainContent columns={this.state.columns} />
       <Footer />
     </div>
    )
  }
}
