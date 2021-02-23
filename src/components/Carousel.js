import React, { Component } from 'react'

export default class Carousel extends Component {
    state = {
        index: 0
    }

    LeftClickHandler = () => {
        if (this.state.index < 3) {

            this.setState((state, props) => ({
                index: state.index + 1
            }))
        }
        if (this.state.index === 3) {
            this.setState((state, props) => ({
                index: 0
              }));
        }
    }

    RightClickHandler = () => {
        if (this.state.index > 0) {
            this.setState((state, props) => ({
                index: state.index - 1
              }));
        }
        if (this.state.index === 0) {
            this.setState((state, props) => ({
                index: 3
              }));
        }
    }
    render() {
        return (
            <div>
                <img src= {this.props.imgs[this.state.index]}/>
                <button onClick={this.LeftClickHandler}>left</button>
                <button onClick={this.RightClickHandler}>right</button>
            </div>
        )
    }
}

//one image
//then the state compomnent
//then change the state