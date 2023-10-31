const { ethers } = require("ethers");

const tokenFactoryAddress = "YOUR_TOKEN_FACTORY_ADDRESS";
let tokenFactory;
let provider;
let signer;

const tokenContractABI = [
  // Insert the ABI of your TokenContract here
  // You can obtain this from the compiled contract or the ABI file
];

const tokenFactoryABI = [
  // Insert the ABI of your TokenFactory contract here
  // You can obtain this from the compiled contract or the ABI file
];

async function setup() {
  provider = new ethers.providers.JsonRpcProvider("YOUR_PROVIDER_URL");
  signer = provider.getSigner();

  tokenFactory = new ethers.Contract(tokenFactoryAddress, tokenFactoryABI, signer);
}

async function createToken(name, symbol, initialSupply) {
  await setup();

  const tx = await tokenFactory.createToken(name, symbol, initialSupply);
  await tx.wait();
  console.log("Token created successfully");
}

async function mintTokens(tokenAddress, amount) {
  await setup();

  const token = new ethers.Contract(tokenAddress, tokenContractABI, signer);
  const tx = await token.mint(amount);
  await tx.wait();
  console.log(`Minted ${amount} tokens successfully`);
}

async function getTokenBalance(tokenAddress, address) {
  await setup();

  const token = new ethers.Contract(tokenAddress, tokenContractABI, provider);
  const balance = await token.balanceOf(address);
  console.log(`Balance of ${address} for token ${tokenAddress}: ${balance.toString()}`);
}

createToken("MyToken", "MT", 1000000); 
mintTokens("TOKEN_ADDRESS", 1000); 
getTokenBalance("TOKEN_ADDRESS", "YOUR_ADDRESS"); 
