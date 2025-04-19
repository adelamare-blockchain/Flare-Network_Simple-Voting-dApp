import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

// constants
const CANDIDATES_LIST = ["Candidate1", "Candidate2"];

describe("SimpleVoting", function () {
  it("Should count votes correctly", async function () {
    const Voting = await hre.ethers.getContractFactory(
      "SimpleVoting"
    );
    const voting = await Voting.deploy(CANDIDATES_LIST);
    await voting.waitForDeployment();

    await voting.vote("Candidate1");
    expect(await voting.votes("Candidate1")).to.equal(1);
  });
});
