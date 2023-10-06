// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MyContract is Ownable {
    uint256 private myState;

    event StateUpdated(uint256 newValue);

    constructor() {
        myState = 0;
    }

    function increment() public onlyOwner {
        myState += 1;
    }

    function getState() external view returns (uint256) {
        return myState;
    }

    function setState(uint256 newValue) external onlyOwner {
        myState = newValue;
        emit StateUpdated(newValue);
    }
}
