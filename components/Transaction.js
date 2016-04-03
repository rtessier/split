import React, { Component } from 'react'

class Transaction extends Component {
  render() {
    return (
      <div>{`${this.props.from} paid $${this.props.amount}`}</div>
    );
  }
}

export default Transaction;
