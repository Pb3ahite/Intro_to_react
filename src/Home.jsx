import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    console.log('Constructing');
    this.state = {
      count: 0,
      name: 'Paul',
    };
  }

  componentDidMount() {
    console.log('Mounted!');
  }

  handleClick = () => {
    
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('Rendering');
    return (
      <div>
        <h1>This is the home page!</h1>
        <p>Hello, My name is Paul</p>
        {this.state.count}
        
      </div>
    );
  }
}
