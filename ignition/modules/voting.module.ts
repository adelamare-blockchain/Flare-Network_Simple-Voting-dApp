// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// constants
const CANDIDATES_LIST = ["Candidate1", "Candidate2"];

// Module Ignition
const VotingModule = buildModule("VotingModule", (m) => {
  const voting = m.contract("SimpleVoting", [CANDIDATES_LIST], {
    id: "simpleVotingContract",
  });

  return { voting };
});

export default VotingModule;
