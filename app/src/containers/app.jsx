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
     fetch('http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion2.js')
     .then(response => response.json())
     .then((data) => {
       const columns = data.page.content.filter((content) => /column/i.test(content.name));
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
