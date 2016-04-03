import { combineReducers } from 'redux'
import housemates from './housemates'
import transactions from './transactions'

const rootReducer = combineReducers({
  housemates,
  transactions
})

export default rootReducer
