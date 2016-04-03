const defaultHousemates = [
  { name: 'Link', amount: 0.00 },
  { name: 'Ganon', amount: 0.00 },
  { name: 'Zelda', amount: 0.00 }
]

function reduceHousemates(state = defaultHousemates, action) {
  let updatedHousemates = state
  switch (action.type) {
    case 'ADD_BILL':
      let numberOfHousemates = state.length + 1
      let dueEach = action.amount / numberOfHousemates
      updatedHousemates = state.map(housemate => {
        return { name: housemate.name, amount: housemate.amount + dueEach }
      })
      return updatedHousemates
      break
    case 'PAYMENT_RECEIVED':
      console.log(`Removing $${action.amount} from ${action.from}'s balance`)
      updatedHousemates = state.map(housemate => {
        let newBalance = housemate.amount
        if (action.from === housemate.name) {
          newBalance = newBalance - action.amount
        }
        return { name: housemate.name, amount: newBalance }
      })
      return updatedHousemates
      break
  }

  return state;
}

export default reduceHousemates
