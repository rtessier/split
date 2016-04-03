export const addBill = (amount) => {
  console.log('A bill has been added for $', amount)
  return {
    type: 'ADD_BILL',
    amount: amount
  }
}
