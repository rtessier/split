import React, { Component } from 'react'
import { connect } from 'react-redux'
import { paymentReceived } from '../actions/paymentReceived'
import Housemate from '../components/Housemate'

class HousematesList extends Component {
  render() {
    return (
      <div>
        <h2>Balances</h2>
        <ul>
          {this.props.housemates.map(housemate =>
            <li
              key={housemate.name}>
              <Housemate
                onPaymentReceived={this.paymentReceived.bind(this)}
                name={housemate.name}
                amount={housemate.amount}
                />
            </li>
          )}
        </ul>
      </div>
    )
  }

  paymentReceived(from, amount) {
    this.props.paymentReceived(from, amount)
  }
}

function mapStateToProps(state) {
  return {
    housemates: state.housemates
  }
}

function mapDispatchToProps(dispatch) {
  return {
    paymentReceived: (from, amount) => {
      dispatch(paymentReceived(from, amount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HousematesList)
