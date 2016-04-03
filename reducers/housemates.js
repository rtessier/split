const defaultHousemates = [
  { name: 'Link', amount: 0.00 },
  { name: 'Ganon', amount: 0.00 },
  { name: 'Zelda', amount: 0.00 }
]

function reduceHousemates(state = defaultHousemates, action) {
  switch (action.type) {
    case 'PAYMENT_RECEIVED':
      console.log(`Adding ${action.amount} to balance for ${action.from}`)
      break;
  }

  return state;
}

export default reduceHousemates
