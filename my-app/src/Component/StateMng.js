import React, { Component } from 'react'

export default class StateMng extends Component {
  constructor(){
    super()
    this.state={
      count : 0
    }
  }
  Increament = () => {
    this.setState({ count: this.state.count + 1})
  }
  Decreament = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
     <>
        <center>
          <h1>Value : {this.state.count} </h1>
          <button onClick={this.Increament}>Icreament</button>
          <button onClick={this.Decreament}>Decreament</button>
        </center>
     </>
    )
  }
}
