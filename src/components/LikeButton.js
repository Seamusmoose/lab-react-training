
import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        clickCount: 0
      }

      clickHandler = () => {
        this.setState({
          clickCount: this.state.clickCount + 1
        });
      }
    
    render() {
        let colors =['purple','blue','green','yellow','orange','red']
        return (
            <div>
        
            <button onClick={this.clickHandler} style={{backgroundColor:colors[this.state.clickCount]}}>{this.state.clickCount} likes</button>
                
            </div>
        )
    }
}



