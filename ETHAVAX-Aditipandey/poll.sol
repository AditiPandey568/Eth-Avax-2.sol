// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Polling {
    mapping(address => bool) public haspolled;
    mapping(string => uint) public pollCount;

    function poll(string memory candidate) public {
        require(!haspolled[msg.sender], "Already polled!");
        pollCount[candidate]++;
        haspolled[msg.sender] = true;
    }

    function getPollCount(string memory candidate) public view returns (uint) {
        return pollCount[candidate];
    }
}
