# N.F.T.-Pets-GAME:\_

+-Users can Connect their Wallets and Create a N.F.T. Pet and Level it Up.

## +-For Testing the Successful S.C. DEMO Deployed in the Ropsten Ethereum TestNet:\_

Smart Contract deployed with the account: ------------------
https://ropsten.etherscan.io/address/------------------

+-You can get Ropsten Test Ether Here:\_
https://faucet.dimensions.network

+-How to Interact with the Deployed Smart Contract:\_
https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract/interacting-with-a-smart-contract#step-6-update-the-message

## +-Quick Project start:\_

+-(1)-The first things you need to do are cloning this repository and installing its npm
dependencies:

```sh
npm install
```

+-(2)-Copy and Paste the File ".env.example" inside the same Root Folder(You will Duplicate It) and then rename it removing the part of ".example" so that it looks like ".env" and then fill all the Data Needed Inside the File. In the part of "ALCHEMY_API_KEY"
just write the KEY, not the whole URL.

+-(3-A)-Open a Terminal and let's Test your Project in a Hardhat Local Node. You can also Clone the Ethereum Main Network in your Local Hardhat Node:\_
https://hardhat.org/guides/mainnet-forking.html

```sh
npx hardhat node
```

+-(3-B)-Now Open a 2nd Terminal and Deploy your Project in the Hardhat Local Node. You can also Test it in the same Terminal:\_

```sh
npx hardhat run scripts/deploy.js --network localhost
npx hardhat test
```

## +-Deploying the Project to the Ropsten TestNet:\_

+-(4)-Deploy the Smart Contract to the Ropsten Ethereum Test Network(https://hardhat.org/tutorial/deploying-to-a-live-network.html):\_

```sh
npx hardhat run scripts/deploy.js --network ropsten
```

## +-Deploying the Project to the Ethereum MainNet:\_

+-(5)-Deploy the Smart Contract to the Ethereum Main Network(https://hardhat.org/tutorial/deploying-to-a-live-network.html):\_

```sh
npx hardhat run scripts/deploy.js --network mainnet
```

+-(6)-To Interact with the Deployed S.C. you need to run contract-interact.js:\_

```sh
node scripts/contract-interact.js
```

+-(8)-Verify your smart contract on Etherscan:\_

```sh
npx hardhat verify --network ropsten DEPLOYED_SMART_CONTRACT_ADDRESS_ROPSTEN 'Hello World!'
```

## User Guide:\_

You can find detailed instructions on using this repository and many tips in [its documentation](https://hardhat.org/tutorial).

- [Setting up the environment](https://hardhat.org/tutorial/setting-up-the-environment.html)
- [Testing with Hardhat, Mocha and Waffle](https://hardhat.org/tutorial/testing-contracts.html)
- [Hardhat's full documentation](https://hardhat.org/getting-started/)

For a complete introduction to Hardhat, refer to [this guide](https://hardhat.org/getting-started/#overview).
