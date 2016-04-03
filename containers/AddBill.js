import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBill } from '../actions/addBill'

class AddBill extends Component {
  render() {
    return (
      <div>
        <input ref='billAmount'/>
        <button
          onClick={this.onAddBill.bind(this)}>
            Paid bill
        </button>
      </div>
    )
  }

  onAddBill() {
    this.props.addBill(parseInt(this.refs.billAmount.value))
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addBill: (amount) => {
      dispatch(addBill(amount))
    }
  }
}

export default connect(state => state, mapDispatchToProps)(AddBill)
