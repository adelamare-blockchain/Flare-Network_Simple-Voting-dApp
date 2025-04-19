// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

/// @notice Custom error when a candidate is not inside the candidates list
error NotCandidate();

/// @title SimpleVoting - A basic voting contract for Flare Network
/// @author Antoine Delamare - https://github.com/adelamare-blockchain
/// @notice This contract allows users to vote for predefined candidates
/// @dev Implements a simple voting mechanism with candidate validation
contract SimpleVoting {

    /// @notice Maps candidate names to their vote counts
    mapping(string => uint256) public votes;     
    
    /// @notice Array containing all valid candidate names
    string[] public candidates;
                      
    /// @notice Emitted when a vote is cast
    /// @param candidate The name of the candidate who received the vote
    event Voted(string candidate);

    /// @notice Initializes the contract with a list of candidates
    /// @param _candidates Array of candidate names to be included in the election
    constructor(string[] memory _candidates) {
        candidates = _candidates;
    }

    /// @notice Allows a user to vote for a candidate
    /// @param candidate The name of the candidate to vote for
    /// @dev Validates candidate existence before counting the vote
    function vote(string memory candidate) public {
        if(!isCandidate(candidate)) revert NotCandidate();
        votes[candidate]++;
        emit Voted(candidate);
    }

    /// @notice Checks if a given name is a valid candidate
    /// @param candidate The name to check
    /// @return bool True if the candidate exists, false otherwise
    /// @dev Uses keccak256 for string comparison
    function isCandidate(string memory candidate) internal view returns (bool) {
        for (uint i = 0; i < candidates.length; i++) {
            if (keccak256(bytes(candidates[i])) == keccak256(bytes(candidate))) {
                return true;
            }
        }
        return false;
    }
}