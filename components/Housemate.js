import React, { Component } from 'react'

class Housemate extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name} {this.renderBalanceStatus()}</div>
        <input ref='paymentAmount' />
        <button
          onClick={this.onPaymentReceived.bind(this)}>
            Payment received
        </button>
      </div>
    )
  }

  onPaymentReceived() {
    this.props.onPaymentReceived(this.props.name, Number(this.refs.paymentAmount.value))
  }

  renderBalanceStatus() {
    let status = "owes"
    let amount = this.props.amount.toFixed(2)

    if (this.props.amount < 0) {
      status = "gets back"
      amount = -amount
    }

    return `${status} $${amount}`
  }
}

export default Housemate
