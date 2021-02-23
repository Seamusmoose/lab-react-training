import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    
    state = {
        clicked: false
      }

      clickHandler = () => {
        this.setState((state, props) => ({
          clicked: !this.state.clicked 
        }));
      }
    
    render() {
        return (
            <div>
          
            <img 
            onClick={this.clickHandler} 
            src={this.state.clicked ? this.props.img : this.props.imgClicked} 
            alt="image" />
                
            </div>
        )
    }
}


