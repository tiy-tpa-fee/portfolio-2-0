import React, { Component } from 'react'

class Cartitems extends Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired
  }

  render () {
    return <tr>
      <th>{this.props.name}</th>
      <td>{this.props.description}</td>
      <td>${this.props.price / 100}</td>
    </tr>
  }
}

export default Cartitems
