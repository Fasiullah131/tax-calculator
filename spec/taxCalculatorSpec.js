const calculateTax = require('../taxCalculator');

describe("Tax Calculator", function() {
  it("should return 0 tax for income <= 10000", function() {
    expect(calculateTax(8000)).toBe(0);
  });

  it("should calculate 10% tax for income between 10001 and 40000", function() {
    expect(calculateTax(20000)).toBe(1000);
  });

  it("should calculate tax for income between 40001 and 80000", function() {
    expect(calculateTax(50000)).toBe(5000);
  });

  it("should calculate tax for income > 80000", function() {
    expect(calculateTax(100000)).toBe(17000);
  });

  it("should handle income exactly at 10000", function() {
    expect(calculateTax(10000)).toBe(0);
  });

  it("should handle income exactly at 40000", function() {
    expect(calculateTax(40000)).toBe(3000);
  });

  it("should handle income exactly at 80000", function() {
    expect(calculateTax(80000)).toBe(11000);
  });
});