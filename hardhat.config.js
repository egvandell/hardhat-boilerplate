require("@nomicfoundation/hardhat-toolbox");


const ALCHEMY_API_KEY = "xJsIXEhy9a2DuZFDc2UPBvn_lkUV5T9I";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "YOUR GOERLI PRIVATE KEY";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
/*
require("./tasks/faucet");
*/

/** @type import('hardhat/config').HardhatUserConfig */
/*
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337 // We set 1337 to make interacting with MetaMask simpler
    }
  }
};
*/