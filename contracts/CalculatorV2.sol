//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.10;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract CalculatorV2 is Initializable {
    uint public val;

    function add(uint a, uint b) public pure returns (uint) {
        return a + b;
    }


    function getVal() public view returns (uint) {
        return val;
    }

    function multiply(uint a, uint b) public pure returns (uint) {
        return a * b;
    }

}
