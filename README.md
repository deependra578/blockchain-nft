## Technologies & Platform Used

- ERC 721
- Openzeppelin
- IPFS
- web3.js
- Hardhat
- Alchemy
- Pinata

## Packages Installed
- npm install hardhat
- npm install @openzeppelin/contracts
- npm install dotenv --save // Connect Blockchain with Metamask
- npm install --save-dev @nomiclabs/hardhat-ethers 'ethers@^5.0.0'
- npm install @alch/alchemy-web3

### Compile & Run Contract
- npx hardhat compile - compile contract
- npx hardhat run scripts/deploy.js --network ropsten

### Minting Image with Contract
- node scripts/mint-nft.js
