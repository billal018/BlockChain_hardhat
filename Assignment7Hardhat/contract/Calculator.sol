// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Calculator is Ownable {
    using SafeMath for uint256;

    uint256 public lastResult;
    uint256 public lastAdditionResult;
    uint256 public lastSubtractionResult;
    uint256 public lastMultiplicationResult;
    uint256 public lastDivisionResult;

    function add(uint256 a, uint256 b) public onlyOwner {
        lastAdditionResult = a.add(b);
        lastResult = lastAdditionResult;
    }

    function subtract(uint256 a, uint256 b) public onlyOwner {
        lastSubtractionResult = a.sub(b);
        lastResult = lastSubtractionResult;
    }

    function multiply(uint256 a, uint256 b) public onlyOwner {
        lastMultiplicationResult = a.mul(b);
        lastResult = lastMultiplicationResult;
    }

    function divide(uint256 a, uint256 b) public onlyOwner {
        require(b != 0, "Division by zero");
        lastDivisionResult = a.div(b);
        lastResult = lastDivisionResult;
    }

    function getLastResult() public view returns (uint256) {
        return lastResult;
    }
}
