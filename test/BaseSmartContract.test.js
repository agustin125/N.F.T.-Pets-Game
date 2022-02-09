const { expect } = require("chai");
const { ethers, network } = require("hardhat");

var chai = require("chai");
const BN = require("bn.js");
chai.use(require("chai-bn")(BN));

function tokens(n) {
  return web3.utils.toWei(n, "ether");
}

contract("BaseSmartContract", ([deployer, investor]) => {
  let baseSmartContract;

  before(async () => {
    // Test Something.
  });

  describe("BaseSmartContract deployment", async () => {
    it("contract has a name", async () => {
      const name = await baseSmartContract.name();
      assert.equal(name, "SampleSmartContract");
    });
  });
});
