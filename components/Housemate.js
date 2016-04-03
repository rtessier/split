import React, { Component } from 'react'

class Housemate extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name} {this.renderBalanceStatus()}</div>
        <input />
        <button>Payment received</button>
      </div>
    )
  }

  renderBalanceStatus() {
    let status = "owes"
    let amount = this.props.amount

    if (this.props.amount < 0) {
      status = "gets back"
      amount = -amount
    }

    return `${status} $${amount}`
  }
}

export default Housemate
