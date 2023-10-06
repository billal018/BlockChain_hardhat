const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying MyContract...");
    const MyContract = await hre.ethers.getContractFactory("MyContract"); // Updated contract name
    const myContract = await MyContract.connect(deployer).deploy();
    await myContract.deployed();

    console.log("MyContract deployed to:", myContract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
