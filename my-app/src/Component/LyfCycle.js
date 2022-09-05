import { Component } from "react";

class LyfCycle extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }
        console.log('component init')
    }
    handle = () => {
        this.setState({
            count : 10
        })
    }
     
    componentDidMount(){
        console.log('component didmount')
    }
    render() {
        console.log('component render') 
        return <>
            {this.state.count}
            <button onClick={this.handle}>Click</button>
        </>
    }
    componentDidUpdate(){
        console.log('component did update')
    }
}
 
export default LyfCycle;