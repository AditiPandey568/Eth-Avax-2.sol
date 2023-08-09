const contractABI = [
    {
      // ABI for the smart contract functions
      "constant": false,
      "inputs": [
        {
          "name": "candidate",
          "type": "string"
        }
      ],
      "name": "poll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "candidate",
          "type": "string"
        }
      ],
      "name": "getPollCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
  