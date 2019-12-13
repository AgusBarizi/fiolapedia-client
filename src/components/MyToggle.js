import React, {Component} from 'react';

class MyToggle extends Component{
    constructor(props){
        super(props);
        this.state = {
        toggleStatus : true
        }
        this.onClick = this.onClick.bind(this)
    }
    componentDidMount(){
    }
    componentWillUnmount(){
    }
    onClick(){
        this.setState(state=>({
        toggleStatus: !state.toggleStatus
        }))
    }
    render(){
        return <button onClick={this.onClick}>{this.state.toggleStatus?'ON':'OFF'}</button>
    }
}

export default MyToggle