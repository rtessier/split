import _ from 'lodash'

function reduceTransactions(state = [], action) {
  switch (action.type) {
    case 'PAYMENT_RECEIVED':
      let updatedTransactions = _.union(state, [
        { from: action.from, amount: action.amount }
      ])
      return updatedTransactions;
      break;
  }

  return state;
}

export default reduceTransactions
