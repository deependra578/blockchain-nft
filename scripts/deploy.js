const { ethers } = require("hardhat");

async function main(){
    const MyNFT = await ethers.getContractFactory("MyNFT");

    // Start Deployment
    const myNFT = await MyNFT.deploy();
    console.log("Contract deployment to address:", myNFT.address);
}

main()
    .then(()=> process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

// 0x774CEbd74241A9F972A3170B44E28B68CFCfA8D8   deployed address