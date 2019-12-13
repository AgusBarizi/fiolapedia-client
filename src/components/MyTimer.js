import React, {Component} from 'react';

class MyTimer extends Component{


    //cara lama
    constructor(props){
      super(props);
  
      this.state = {
        time : 0 
      }
    }

    //cara baru
    // state = {
    //   time:0
    // }



    //on init
    componentDidMount(){
      this.addInterval = setInterval( ()=>this.increaseTime(), 1000 )
    }
    //on destroy
    componentWillUnmount(){
      clearInterval(this.addInterval)
    }
  
    increaseTime(){
      this.setState((state, props)=>({
        time : parseInt(state.time)+1
      }))
    }
  
    render(){
      return `${this.state.time} Times`
    }
  
}

export default MyTimer