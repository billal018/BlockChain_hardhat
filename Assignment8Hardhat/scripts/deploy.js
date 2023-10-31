async function main() {
    const [deployer] = await ethers.getSigners();
  
    const TokenFactory = await ethers.getContractFactory("TokenFactory");
    const tokenFactory = await TokenFactory.deploy();
    await tokenFactory.deployed();
  
    const TokenContract = await ethers.getContractFactory("TokenContract");
    const initialSupply = 1000000;
    const tokenName = "YourTokenName";
    const tokenSymbol = "SYM";
    await tokenFactory.createToken(tokenName, tokenSymbol, initialSupply);
  
    console.log("TokenFactory deployed to:", tokenFactory.address);
  
    const createdTokens = await tokenFactory.createdTokens();
    if (createdTokens.length > 0) {
      const tokenAddress = createdTokens[0];
      const token = TokenContract.attach(tokenAddress);
      await token.connect(deployer).mint(1000); // Mint 1000 tokens
      const balance = await token.balanceOf(deployer.address);
      console.log("Tokens minted. New balance:", balance.toString());
    }
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  