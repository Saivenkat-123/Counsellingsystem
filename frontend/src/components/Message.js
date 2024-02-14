import React, { Component } from 'react'

 class Message extends Component {
    constructor() {
      super()
    
      this.state = {
         message: 'Welcome To Visitor'
      }
    }
    changeMessage(){
        this.setState({
            message: 'thank you for subscribing'
        })
    }
  render() {
    return (
      <div>
        <center>
            <h1>{this.state.message} </h1>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
        </center>
      </div>
    )
  }
}

export default Message