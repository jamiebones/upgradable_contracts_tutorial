// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const CalculatorV1 = await ethers.getContractFactory("CalculatorV1");
    console.log("Deploying Calculator...");
    const calculator = await upgrades.deployProxy(CalculatorV1, [42], {
        initializer: "initialize",
    });
    await calculator.deployed();
    console.log("Calculator deployed to:", calculator.address);
}

main();

//contract deploy address
//0xc0919f8976ab0F525F9825886Ebd5970233f9293
