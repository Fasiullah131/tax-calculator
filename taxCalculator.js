function calculateTax(income) {
  if (income <= 10000) {
    return 0;
  } else if (income <= 40000) {
    return (income - 10000) * 0.1;
  } else if (income <= 80000) {
    return 3000 + (income - 40000) * 0.2;
  } else {
    return 11000 + (income - 80000) * 0.3;
  }
}

module.exports = calculateTax;