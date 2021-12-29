require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "kovan",
  networks: {
    hardhat: {},
    localhost: {},
    kovan: {
      url: process.env.KOVAN_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      saveDeployments: true,
    },
  },
  solidity: "0.7.3",
};
