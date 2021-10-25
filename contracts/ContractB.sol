pragma solidity ^0.8.3;

contract B {
    uint256 public y;
    address public contractA;

    constructor() public {
        y = 1;
    }

    function setContractA(address contractAddress) external {
        require(contractAddress != address(0), "Cannot initialize with 0 address");
        contractA = contractAddress;
    }

    modifier onlyContractA() {
        require(msg.sender == contractA, "Only contract A can perform this action");
        _;
    }

    function read() public onlyContractA returns (uint256) {
        y = y * 3;
        return y;
    }
}
