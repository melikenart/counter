

// 1. Kopyaladığınız adresi BURAYA yapıştırın
const CONTRACT_ADDRESS = '0xc5A5bA4fd3510f9607838Ea691867905d77ADD32E; 

// 2. Kopyaladığınız uzun ABI (JSON dizisini) BURAYA yapıştırın
const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "voteType",
				"type": "string"
			}
		],
		"name": "VoteCasted",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "voteNo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "voteYes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getResults",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "noVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "yesVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

    


// 3. Web3 (veya ethers.js gibi bir kütüphane) kullanarak sözleşme örneği oluşturun
const web3 = new Web3(window.ethereum); // MetaMask'ı bağlar
const votingContract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS); 

// Artık votingContract nesnesi üzerinden sözleşmedeki fonksiyonları çağırabilirsiniz.

