const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator Contract", function () {
  let calculator;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    const Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
    await calculator.deployed();
  });

  it("should perform addition correctly", async function () {
    await calculator.connect(owner).add(10, 8);
    const result = await calculator.getLastResult();
    expect(result).to.equal(18);
  });

  it("should perform subtraction correctly", async function () {
    await calculator.connect(owner).subtract(10, 5);
    const result = await calculator.getLastResult();
    expect(result).to.equal(5);
  });

  it("should perform multiplication correctly", async function () {
    await calculator.connect(owner).multiply(5, 4);
    const result = await calculator.getLastResult();
    expect(result).to.equal(20);
  });

  it("should perform division correctly", async function () {
    await calculator.connect(owner).divide(100, 5);
    const result = await calculator.getLastResult();
    expect(result).to.equal(20);
  });

  it("should handle division by zero", async function () {
    try {
      await calculator.connect(owner).divide(10, 0);
    } catch (error) {
      expect(error.message).to.include("Division by zero");
    }
  });
});
