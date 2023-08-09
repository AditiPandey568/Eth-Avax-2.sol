let contract;

// Connect to MetaMask
        const connectMetaMask = async () => {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                contract = createContractInstance();
                const accounts = await web3.eth.getAccounts();
                const address = accounts[0];
                document.getElementById('walletAddress').innerText = `Connected Wallet Address: ${address}`;
                console.log('Connected to MetaMask!');
            } else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider);
                contract = createContractInstance();
                console.log('Connected to MetaMask!');
            } else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        };

// Create an instance of the smart contract
        const createContractInstance = () => {
            const contractAddress = '0x01cB2D3e2c73413957B0A2455ceB98A84A700be3';
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            return contract;
        };

// Poll for Metacrafters
        const pollForMetacrafters = async () => {
            try {
                const candidate = document.getElementById('candidateInput').value;
                const accounts = await web3.eth.getAccounts();
                await contract.methods.poll(candidate).send({ from: accounts[0] });
                console.log('Polling Done!');
            } catch (error) {
                console.error(error);
            }
        };

// Get the poll count for a candidate
        const getPollCount = async () => {
            try {
                const candidate = document.getElementById('candidateCountInput').value;
                const count = await contract.methods.getPollCount(candidate).call();
                document.getElementById('pollCount').innerText = `poll count for ${candidate}: ${count}`;
                console.log(`Poll count for ${candidate}: ${count}`);
            } catch (error) {
                console.error(error);
            }
        };