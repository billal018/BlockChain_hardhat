// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenContract is ERC20 {
    address public factory;
    mapping(address => bool) public isMint;

    constructor(string memory name, string memory symbol, uint256 initialSupply, address _factory) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
        factory = _factory;
        isMint[_factory] = true;
    }

    function mint(uint256 amount) external {
        require(isMint[msg.sender], "Only the factory can mint tokens");
        _mint(factory, amount);
    }
}