export const getTotals = (cartItems) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (let { amount, price } of cartItems.values()) {
    totalCost += parseFloat(price) * amount;
    totalAmount += amount;
  }

  totalCost = totalCost.toFixed(2);
  return { totalAmount, totalCost };
};
