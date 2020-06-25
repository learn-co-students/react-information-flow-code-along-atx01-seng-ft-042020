import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: getRandomColor()
    }
  }

  changeColor = () => {
    let color = getRandomColor()
    let childrenColor = getRandomColor()
    this.setState({ color, childrenColor })
  }

  render() {
    return (
      <div className="parent" style={{ backgroundColor: this.state.color }}>
        <Child clickEvent={this.changeColor} color={this.state.childrenColor} />
        <Child clickEvent={this.changeColor} color={this.state.childrenColor} />
      </div>
    )
  }
}

export default Parent
