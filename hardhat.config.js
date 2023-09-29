require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
//const INFURA_API_KEY = "KEY";
const INFURA_API_KEY = process.env.INFURA_API_KEY;

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts

//const PRIVATE_KEY = "YOUR SEPOLIA PRIVATE KEY";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.19",
  networks: {   
    goerli: {
    url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
    accounts: [PRIVATE_KEY]
  },
  alfajores: {
    url: `https://celo-alfajores.infura.io/v3/${INFURA_API_KEY}`,
    accounts: [PRIVATE_KEY]
  } , 
    
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY]
    }
   
  }
};