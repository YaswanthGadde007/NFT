// using ethers.js to interact with ethereum blaockchain
// ethers.js is built in hardhat

// import ethers
const {ethers}=require("hardhat");


async function main() {

    // 1. define which contract to deploy.
    const contract = await ethers.getContractFactory("NFTee");
    
    // 2. deploy it.
    const deployedContract=await contract.deploy();

    // 3. print the address of the deployed contract.
    console.log("NFT Contract deployed to: ",deployedContract.address)

}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
})

