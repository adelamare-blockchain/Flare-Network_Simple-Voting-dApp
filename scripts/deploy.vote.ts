import hre from "hardhat";
import "dotenv/config";

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS; // From deployment
  const voting = await hre.ethers.getContractAt(
    "SimpleVoting",
    contractAddress as string
  );

  await voting.vote("Candidate1");
  console.log("✅ Voted for Candidate1!");
}

main().catch((error) => console.error(error));
