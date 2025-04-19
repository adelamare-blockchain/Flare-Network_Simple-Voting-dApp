import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    coston2: {
      url: "https://coston2-api.flare.network/ext/C/rpc",
      accounts: process.env.COSTON2_PRIVATE_KEY
        ? [`0x${process.env.COSTON2_PRIVATE_KEY}`]
        : [],
    },
  },
};

export default config;
