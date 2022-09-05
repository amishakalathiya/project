import React, { Component } from 'react'

export default class ConstructerComp extends Component {
    constructor(){
        super()
        this.state={
            number:"amisha"
        }
    }
  render() {
    return (
        <div>
            <h1>ConstructerComp</h1>
            <h1>{this.state.number}</h1>
        </div>
      
    )
  }
}
