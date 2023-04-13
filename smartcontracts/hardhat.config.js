require("@nomiclabs/hardhat-waffle");
// hardhat.config.js

require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.3"
      },
      {
        version: "0.8.0"
      },
      {
        version: "0.8.1"
      },
      {
        version: "0.8.2"
      },
      {
        version: "0.8.9"
      }
    ]
  },
  networks: {
    miRed: {
          //url: `http://localhost:8545`,
          url: `https://sepolia.infura.io/v3/c9211f7159d34e6ba089c2a8b5fc680c`,
          accounts: [`0x${process.env.ADMIN_PRIV_KEY}`]
        }
  }
};
