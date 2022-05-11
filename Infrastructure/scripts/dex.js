
const hre = require("hardhat");

async function main() {
 
  const Dex = await hre.ethers.getContractFactory("DEX");
  const Dai = await hre.ethers.getContractFactory("DAI");
  const Bat = await hre.ethers.getContractFactory("BAT");
  const Shib = await hre.ethers.getContractFactory("SHIB");
  const Xrp = await hre.ethers.getContractFactory("XRP");

  const dex = await Dex.deploy();
  const dai = await Dai.deploy();
  const bat = await Bat.deploy();
  const shib = await Shib.deploy();
  const xrp = await Xrp.deploy();

  await dex.deployed();
  await dai.deployed();
  await bat.deployed();
  await shib.deployed();
  await xrp.deployed();

  
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
