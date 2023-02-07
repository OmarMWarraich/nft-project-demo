var NFTCollection = artifacts.require("./NFTCollection.sol");

module.exports = function(deployer) {
  deployer.deploy(NFTCollection,"https://ipfs.io/ipfs/process.env.Project_hash","TOKEN NAME","SYMBOL");
};
