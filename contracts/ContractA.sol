pragma solidity ^0.8.3;

import "./ContractB.sol";

contract A {
    uint256 public x;
    B public contractB;

    event ESum(uint256 value);

    constructor() public {
        x = 1;
    }

    function setContractB(address contractAddress) external {
        require(contractAddress != address(0), "Cannot initialize with 0 address");
        contractB = B(contractAddress);
    }

    function print() public {
        uint256 y = contractB.read();
        x = x * 2;
        emit ESum(x + y);
    }
}
