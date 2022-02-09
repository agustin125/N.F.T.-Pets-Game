/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-undef */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-contract-sizer"); //+-By running the Command "npx hardhat size-contracts" we can know the Size of our S.Contracts.

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard in whatever E.V.M. Compatible Blockcahin
// do you need, and replace "KEY" with its key in the ".env" file.
const ETH_ROPSTEN_ALCHEMY_API_KEY = process.env.ETH_ROPSTEN_ALCHEMY_API_KEY;
const ETH_MAINNET_ALCHEMY_API_KEY = process.env.ETH_MAINNET_ALCHEMY_API_KEY;

const POLYGON_MUMBAI_ALCHEMY_API_KEY =
  process.env.POLYGON_MUMBAI_ALCHEMY_API_KEY;
const POLYGON_MAINNET_ALCHEMY_API_KEY =
  process.env.POLYGON_MAINNET_ALCHEMY_API_KEY;

// Replace this private key with your E.V.M. Compatible Blockcahin account private key in the ".env" file.
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts.
const HARDHAT_MAINNET_FORK_KEY = process.env.HARDHAT_MAINNET_FORK_KEY;
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;
const ETH_MAINNET_PRIVATE_KEY = process.env.ETH_MAINNET_PRIVATE_KEY;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;
const POLYGON_MAINNET_PRIVATE_KEY = process.env.POLYGON_MAINNET_PRIVATE_KEY;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  // eslint-disable-next-line no-restricted-syntax
  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  contractSizer: {
    alphaSort: false,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: false,
  },
  paths: {
    artifacts: "./src/artifacts",
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      /**forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${HARDHAT_MAINNET_FORK_KEY}`,
        blockNumber: 12610259,
      },*/
    } /**
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ETH_ROPSTEN_ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${ETH_MAINNET_ALCHEMY_API_KEY}`,
      accounts: [`0x${ETH_MAINNET_PRIVATE_KEY}`],
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${POLYGON_MUMBAI_ALCHEMY_API_KEY}`,
      accounts: [`0x${MUMBAI_PRIVATE_KEY}`],
    },
    matic: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${POLYGON_MAINNET_ALCHEMY_API_KEY}`,
      accounts: [`0x${POLYGON_MAINNET_PRIVATE_KEY}`],
    },
  }*/,
  },
};
