require("dotenv").config();
const API_URL = process.env.API_URL;

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const {createAlchemyWeb3} = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
console.log(JSON.stringify(contract.abi));

const contractAddress = "0x774CEbd74241A9F972A3170B44E28B68CFCfA8D8";
const nftContract = new web3.eth.Contract(contract.abi,contractAddress);

async function mintNFT(tokenURI){
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY,"latest");

    const tx ={
        from: PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        gas: 500000,
        data: nftContract.methods.mintNFT(PUBLIC_KEY,tokenURI).encodeABI()
    }

    const signPromise = web3.eth.accounts.signTransaction(tx,PRIVATE_KEY)
    signPromise
        .then((signedTX) => {
            web3.eth.sendSignedTransaction(
                signedTX.rawTransaction,
                function(err,hash){
                    if(!err){
                        console.log(
                            "The hash of you transaction id: ",
                            hash,
                            "\n Check Alchemy's mempool to view the status of your transaction!"
                        )
                    }else{
                        console.log("Something went wrong while submitting your transaction:", err)
                    }
                }
            )
        })
        .catch((err) => {console.log("Promise failed: ",err)})

}

mintNFT("https://gateway.pinata.cloud/ipfs/QmXDMoJmbwGGH6VeVbsg5pHKBzRMZbm9P52W6QSDfcKv1E");

