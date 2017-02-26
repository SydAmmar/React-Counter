import React from 'react';

/*class App extends React.Component {
  render() {
    return (
    <div>
    <h1> Hello World </h1>
    <input type="text" /><br/>
    <button>Submit</button>
    </div>
    );
  }
}*/

class Button extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
    this.increment = this.icrement.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  icrement() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <h1 style={{color: this.props.data}}>COUNTER</h1>
        <h2> {this.state.count} </h2>
        <button id="button1" onClick={this.increment}>Plus +</button>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button id="button2" onClick={this.decrement}>Minus -</button>
      </div>
    )
  }
}

export default Button;
