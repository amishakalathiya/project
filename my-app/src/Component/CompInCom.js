import React, { Component } from 'react'

function Mycomp(){
    return <h1>Hello my component..</h1>
}
export default class CompInCom extends Component {
  render() {
    return (
        <>
            <div>CompInCom</div>
            <Mycomp/>
        </>
    )
  }
}
