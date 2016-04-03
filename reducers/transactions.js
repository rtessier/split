import _ from 'lodash'

function reduceTransactions(state = [], action) {
  switch (action.type) {
    case 'ADD_BILL':
      return _.union(state, [
        { from: 'You', amount: action.amount }
      ])
      break;
    case 'PAYMENT_RECEIVED':
      return _.union(state, [
        { from: action.from, amount: action.amount }
      ])
      break
  }

  return state
}

export default reduceTransactions
