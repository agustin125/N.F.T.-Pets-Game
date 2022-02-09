async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const LipToken = await ethers.getContractFactory("LipToken");
  const lipToken = await LipToken.deploy();

  console.log("LipToken Contract Address:", lipToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
