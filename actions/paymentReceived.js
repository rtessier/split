export const paymentReceived = (housemate, amount) => {
  return {
    type: 'PAYMENT_RECEIVED',
    from: housemate,
    amount: amount
  }
}
