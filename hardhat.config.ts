import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const Private_Key = ""

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/sDJZAU5yfGAyK8D3OJcCkWP2BUUi-nig`,
      accounts: [`0x${Private_Key}`],
    },
  },
};

export default config;