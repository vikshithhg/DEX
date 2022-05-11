const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("dex", function () {
  it("Should return the new greeting once it's changed", async function () {
      const Dex = await ethers.getContractFactory("Dex");
      const dex = await Dex.deploy(msg.sender);
      await dex.deployed();
  
      expect(await greeter.greet()).to.equal("Hello, world!");
  
      const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
  
      // wait until the transaction is mined
      await setGreetingTx.wait();
  
      expect(await greeter.greet()).to.equal("Hola, mundo!");
    });
  });