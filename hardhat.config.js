require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  // define test network to deploy to

  // define the account to use for deployment
  networks:{
    rinkeby:{
      url:process.env.ALCHEMY_API_KEY_URL,
      accounts:[process.env.PRIVATE_KEY],
    }
  }



 
};
