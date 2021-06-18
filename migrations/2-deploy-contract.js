// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const ERC721ATHANOR = artifacts.require("ERC721BLOCKCHAIN");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(ERC721ATHANOR, "Non fungible token","NFT", "https://example.com/token")
  .then(() => console.log("OK"))
};