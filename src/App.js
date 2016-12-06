import React, { Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

class App extends Component {
  incre = () => {
    let { INCRE } = this.props.actions
    INCRE()
  }
  decre = () => {
    let { DECRE } = this.props.actions
    DECRE()
  }
  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="info">{this.props.state.count}</Button>
        <Button onClick={this.incre}>+1</Button>
        <Button onClick={this.decre}>-1</Button>
      </ButtonToolbar>
    )
  }
}

export default App
