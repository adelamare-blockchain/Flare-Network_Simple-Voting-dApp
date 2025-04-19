<h1 align="center">Simple Voting dApp – Flare Network</h1>

<div align="center">
<p><a href="#"><img src="https://img.shields.io/badge/Solidity-0.8.28-363636?logo=solidity" alt="Solidity 0.8.28"></a> <a href="#"><img src="https://img.shields.io/badge/Hardhat-2.23.0-f7f745?logo=hardhat" alt="Hardhat 2.23.0"></a> <a href="#"><img src="https://img.shields.io/badge/Flare_Coston2-Testnet-4E85F7?logo=flare-network" alt="Flare Coston2 Testnet"></a> <a href="#"><img src="https://img.shields.io/badge/Ethers.js-6.4.0-3C3C3D?logo=ethereum" alt="Ethers.js 6.4.0"></a> <a href="#"><img src="https://img.shields.io/badge/TypeScript-4.9.0-3178C6?logo=typescript" alt="TypeScript 4.9.0"></a> <a href="#"><img src="https://img.shields.io/badge/Coverage-100%25-brightgreen" alt="Coverage 100%"></a> </p>
</div>

## 📑 Table of Contents

- [✨ Introduction](#-introduction)

- [📋 Project Structure](#-project-structure)

- [📄 Smart Contract](#-smart-contract)

  - [SimpleVoting.sol](#simplevotinsol)

- [🚀 Deployment](#-deployment)

  - [Hardhat Ignition](#hardhatignition)

- [⚙️ Usage](#-usage)

- [🧪 Testing](#-testing)

- [🔧 Configuration](#-configuration)

- [🤝 Contributing](#-contributing)

- [📜 License](#-license)

## ✨ Introduction

This repository hosts a simple voting dApp built for the [Flare Coston2 Testnet](https://dev.flare.network/network/getting-started/). It walks you through:

- Setting up a Hardhat + TypeScript environment

- Writing and deploying a Solidity smart contract (`SimpleVoting`)

- Interacting with your contract via scripts

- Writing and running automated tests

Whether you’re new to Flare or want to reinforce your blockchain basics, this guide makes it easy and hands‑on.

---

## 📋 Project Structure

```bash
├── contracts/
│ └── SimpleVoting.sol # Voting smart contract
├── ignition/
│ └── modules/
│ └── voting.module.ts # Hardhat Ignition deployment module
├── scripts/
│ └── vote.ts # Script to cast a vote
├── test/
│ └── voting.test.ts # Unit tests for SimpleVoting
├── hardhat.config.ts # Hardhat + network configuration
├── package.json # NPM dependencies & scripts
└── README.md # This documentation
```

## 📄 Smart Contract

### SimpleVoting.sol

- **Purpose**: Allow users to vote for predefined candidates.

- **Key Features**:

  - `mapping(string => uint256) public votes;` – tracks vote counts
  - `string[] public candidates;` – list of valid options
  - `function vote(string memory candidate)` – casts a vote (reverts if invalid)
  - `event Voted(string candidate);` – emitted on each vote

All logic lives in `contracts/SimpleVoting.sol` with Solidity 0.8.28.

---

## 🚀 Deployment

### Hardhat Ignition

We leverage [Hardhat Ignition](https://hardhat.org/ignition/docs/getting-started#overview) for declarative, repeatable deployments.

1. **Configure `hardhat.config.ts`**

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    coston2: {
      url: "https://coston2-api.flare.network/ext/C/rpc",
      accounts: process.env.PRIVATE_KEY
        ? [`0x${process.env.PRIVATE_KEY}`]
        : [],
    },
  },
};
export default config;
```

2. **Write Ignition Module**

See `ignition/modules/voting.module.ts` for an example that deploys `SimpleVoting` with your candidate list.

3. **Deploy**

```bash
npx hardhat ignition deploy ignition/modules/voting.module.ts --network coston2
```

---

## ⚙️ Usage

To cast a vote:

1. Update `scripts/vote.ts` with your deployed contract address:

```ts
const contractAddress = "YOUR_CONTRACT_ADDRESS";
```

2. Run the script:

```bash
npx hardhat run scripts/vote.ts --network coston2
```

3. You should see

```bash
✅ Voted for Candidate1!
```

---

## 🧪 Testing

Automated tests validate core functionality.

- **Write Tests**: see `test/voting.test.ts`

- **Run Tests**:

```bash
npx hardhat test
```

- **Check Coverage**:

```bash
npx hardhat coverage
```

---

## 🔧 Configuration

1. Copy env template:

```bash
cp .env.example .env
```

2. Populate `.env` with your private key for Coston2.

3. Install dependencies:

```bash
npm install
```

4. Compile contracts:

```bash
npx hardhat compile
```

---

## 🤝 Contributing

1. Fork this repo

2. Create a feature branch

3. Write clear, concise code and tests

4. Open a pull request with a description of your changes

---

## 📜 License

Distributed under the MIT License. See [LICENSE](./LICENSE) for details.

---

<div align="center">
  <p>
    <strong>Simple Voting dApp – Flare Network</strong><br>
    Made with ❤️ for the <a href="https://flare.network/news/flare-developer-ambassadors-program">Flare Ambassador Program</a>
  </p>
  <p>
    Created by <a href="https://github.com/adelamare-blockchain">Antoine Delamare</a> | <a href="https://www.blockchain-cie.com/">Blockchain & Cie</a>
  </p>
  <p>
    <a href="https://github.com/adelamare-blockchain"><img src="https://img.shields.io/badge/GitHub-adelamare--blockchain-181717?logo=github" alt="GitHub"></a>
    <a href="https://x.com/blockchain_cie"><img src="https://img.shields.io/badge/X-Blockchain_Cie-0077B5?logo=X" alt="X/Twitter"></a>
    <a href="https://www.linkedin.com/in/adelamare-blockchain/"><img src="https://img.shields.io/badge/LinkedIn-Antoine_Delamare-0077B5?logo=linkedin" alt="LinkedIn"></a>
  </p>
</div>
```
