// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TokenContract.sol";

contract TokenFactory {
    address[] public createdTokens;
    mapping(address => bool) public isTokenCreated;

    function createToken(string memory name, string memory symbol, uint256 initialSupply) external {
        TokenContract newToken = new TokenContract(name, symbol, initialSupply, msg.sender);
        createdTokens.push(address(newToken));
        isTokenCreated[address(newToken)] = true;
    }
}
