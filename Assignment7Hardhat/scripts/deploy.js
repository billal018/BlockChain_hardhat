const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Calculator = await ethers.getContractFactory("Calculator");
  const calculator = await upgrades.deployProxy(Calculator, [], { initializer: "initialize" });

  await calculator.deployed();

  console.log("Calculator deployed to:", calculator.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
