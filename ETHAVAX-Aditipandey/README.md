# Project Title
## Polling for Metacrafter's Favourite Employee by (Aditi Pandey)

This project implements a simple polling application that allows users to poll for Metacrafter's employees and retrieve the poll count. It includes a frontend interface built with HTML, CSS, and JavaScript, and a smart contract written in Solidity.

## Description

The project consists of three main components:

1. *HTML*: The HTML file (`index.html`) sets up the structure of the web page. It includes buttons for connecting to MetaMask, doing polls, and retrieving poll counts. The user interface elements are positioned to provide a clear and intuitive user experience.

2. *JavaScript*: The JavaScript code is contained in the `script.js` file. It handles the interaction with the smart contract and user actions. It includes functions for connecting to MetaMask, creating an instance of the smart contract, polling for a employee, and retrieving the poll count. The connected wallet address and poll count are dynamically updated in the HTML file.

3. *Solidity*: The Solidity code is implemented in the `poll.sol` file. It defines the `Polling` smart contract, which allows users to poll for Metacrafter's employees and retrieves the poll count for each employee. The contract maintains mappings to keep track of polls and has functions for polling and getting the poll count.

## Getting Started

### Prerequisites
- MetaMask browser extension
  
### Executing Program
To run the solidity code, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Steps to interact with the contract using Remix:

1. Open the contract file in Remix IDE.
2. Select the appropriate compiler version.
3. Compile the contract.
4. Click on the "Deploy & Run Transactions" tab in the Remix editor. From the "Environment" dropdown, select the desired development       
   environment (Injected Web3).
5. Ensure that you have the contract deployed
6. Provide the correct contract address in the frontend code `(<Your Contract Address>)`
   
   
   const createContractInstance = () => {
      const contractAddress = '<Your Contract Address>'; //write deployed contract address
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      return contract;
    };
   


### Installation
1. Clone the repository or download the source code files.
shell
git clone https://github.com/your-code address

2. Open the project directory in a code editor.

3. Open `index.html` in a web browser.

### Usage
1. Connect MetaMask:
   - Click the "Connect MetaMask" button.
   - If you have MetaMask installed, it will prompt you to connect and provide account access.

2. Do Your Poll:
   - Enter the employee's name in the "Candidate" input field.
   - Click the "Poll" button to cast your poll.
   - Confirm the transaction in MetaMask.

3. Get Poll Count:
   - Enter the employee's name in the "Candidate" input field.
   - Click the "Get Poll Count" button to retrieve the poll count for the employee.

## Author 
Aditi Pandey

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
