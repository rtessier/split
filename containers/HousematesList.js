import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addBill } from '../actions/index'
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
                onPaymentReceived={this.paymentReceived}
                name={housemate.name}
                amount={housemate.amount}
                />
            </li>
          )}
        </ul>
      </div>
    )
  }

  paymentReceived(event) {
    console.log('Payment received. Event: ', event)
  }
}

function mapStateToProps(state) {
  return {
    housemates: state.housemates
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addBill: addBill }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HousematesList)
