import React, { Component } from 'react';
import { Header } from '../components';

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //
    // }
  }

  render() {
    return (
       <div>
         <Header />
         <p>
           Some content!
         </p>
       </div>
    )
  }
}
