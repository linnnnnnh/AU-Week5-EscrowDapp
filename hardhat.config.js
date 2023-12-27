require('@nomicfoundation/hardhat-toolbox');
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  paths: {
    artifacts: "./app/src/artifacts",
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY]
    },
  }
};