import React, { Component } from 'react'

class Transaction extends Component {
  render() {
    return (
      <div>{this.props.description}: ${this.props.amount}</div>
    );
  }
}

export default Transaction;
