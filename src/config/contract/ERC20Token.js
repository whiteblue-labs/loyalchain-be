export const ERC20TokenContract = {
  "_format": "hh-sol-artifact-1",
  "contractName": "Token",
  "sourceName": "contracts/Token.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
        },
        {
          "internalType": "address[]",
          "name": "admins_",
          "type": "address[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "admins",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isAllowed",
          "type": "bool"
        }
      ],
      "name": "changeAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mintToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "superAdmin",
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
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b506040516200245e3803806200245e833981810160405281019062000037919062000612565b828281600390816200004a919062000916565b5080600490816200005c919062000916565b50505033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000de600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1669021e19e0c9bab2400000620001c860201b60201c565b60008151905060005b818160ff161015620001bd57600160066000858460ff1681518110620001125762000111620009fd565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001a7838260ff1681518110620001885762000187620009fd565b5b602002602001015169021e19e0c9bab2400000620001c860201b60201c565b8080620001b49062000a68565b915050620000e7565b505050505062000b82565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200023a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002319062000af7565b60405180910390fd5b6200024e600083836200033560201b60201c565b806002600082825462000262919062000b19565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000315919062000b65565b60405180910390a362000331600083836200033a60201b60201c565b5050565b505050565b505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620003a8826200035d565b810181811067ffffffffffffffff82111715620003ca57620003c96200036e565b5b80604052505050565b6000620003df6200033f565b9050620003ed82826200039d565b919050565b600067ffffffffffffffff82111562000410576200040f6200036e565b5b6200041b826200035d565b9050602081019050919050565b60005b83811015620004485780820151818401526020810190506200042b565b60008484015250505050565b60006200046b6200046584620003f2565b620003d3565b9050828152602081018484840111156200048a576200048962000358565b5b6200049784828562000428565b509392505050565b600082601f830112620004b757620004b662000353565b5b8151620004c984826020860162000454565b91505092915050565b600067ffffffffffffffff821115620004f057620004ef6200036e565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620005338262000506565b9050919050565b620005458162000526565b81146200055157600080fd5b50565b60008151905062000565816200053a565b92915050565b6000620005826200057c84620004d2565b620003d3565b90508083825260208201905060208402830185811115620005a857620005a762000501565b5b835b81811015620005d55780620005c0888262000554565b845260208401935050602081019050620005aa565b5050509392505050565b600082601f830112620005f757620005f662000353565b5b8151620006098482602086016200056b565b91505092915050565b6000806000606084860312156200062e576200062d62000349565b5b600084015167ffffffffffffffff8111156200064f576200064e6200034e565b5b6200065d868287016200049f565b935050602084015167ffffffffffffffff8111156200068157620006806200034e565b5b6200068f868287016200049f565b925050604084015167ffffffffffffffff811115620006b357620006b26200034e565b5b620006c186828701620005df565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200071e57607f821691505b602082108103620007345762000733620006d6565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200079e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200075f565b620007aa86836200075f565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620007f7620007f1620007eb84620007c2565b620007cc565b620007c2565b9050919050565b6000819050919050565b6200081383620007d6565b6200082b6200082282620007fe565b8484546200076c565b825550505050565b600090565b6200084262000833565b6200084f81848462000808565b505050565b5b8181101562000877576200086b60008262000838565b60018101905062000855565b5050565b601f821115620008c65762000890816200073a565b6200089b846200074f565b81016020851015620008ab578190505b620008c3620008ba856200074f565b83018262000854565b50505b505050565b600082821c905092915050565b6000620008eb60001984600802620008cb565b1980831691505092915050565b6000620009068383620008d8565b9150826002028217905092915050565b6200092182620006cb565b67ffffffffffffffff8111156200093d576200093c6200036e565b5b62000949825462000705565b620009568282856200087b565b600060209050601f8311600181146200098e576000841562000979578287015190505b620009858582620008f8565b865550620009f5565b601f1984166200099e866200073a565b60005b82811015620009c857848901518255600182019150602085019450602081019050620009a1565b86831015620009e85784890151620009e4601f891682620008d8565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff82169050919050565b600062000a758262000a5b565b915060ff820362000a8b5762000a8a62000a2c565b5b600182019050919050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000adf601f8362000a96565b915062000aec8262000aa7565b602082019050919050565b6000602082019050818103600083015262000b128162000ad0565b9050919050565b600062000b2682620007c2565b915062000b3383620007c2565b925082820190508082111562000b4e5762000b4d62000a2c565b5b92915050565b62000b5f81620007c2565b82525050565b600060208201905062000b7c600083018462000b54565b92915050565b6118cc8062000b926000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063429b62e511610097578063a9059cbb11610066578063a9059cbb146102b0578063c634d032146102e0578063dc11a496146102fc578063dd62ed3e14610318576100f5565b8063429b62e51461020257806370a082311461023257806395d89b4114610262578063a457c2d714610280576100f5565b806323b872dd116100d357806323b872dd1461016657806329575f6a14610196578063313ce567146101b457806339509351146101d2576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610348565b60405161010f9190610f56565b60405180910390f35b610132600480360381019061012d9190611011565b6103da565b60405161013f919061106c565b60405180910390f35b6101506103fd565b60405161015d9190611096565b60405180910390f35b610180600480360381019061017b91906110b1565b610407565b60405161018d919061106c565b60405180910390f35b61019e610436565b6040516101ab9190611113565b60405180910390f35b6101bc61045c565b6040516101c9919061114a565b60405180910390f35b6101ec60048036038101906101e79190611011565b610465565b6040516101f9919061106c565b60405180910390f35b61021c60048036038101906102179190611165565b61049c565b604051610229919061106c565b60405180910390f35b61024c60048036038101906102479190611165565b6104bc565b6040516102599190611096565b60405180910390f35b61026a610504565b6040516102779190610f56565b60405180910390f35b61029a60048036038101906102959190611011565b610596565b6040516102a7919061106c565b60405180910390f35b6102ca60048036038101906102c59190611011565b61060d565b6040516102d7919061106c565b60405180910390f35b6102fa60048036038101906102f59190611192565b610630565b005b610316600480360381019061031191906111eb565b610721565b005b610332600480360381019061032d919061122b565b61080c565b60405161033f9190611096565b60405180910390f35b6060600380546103579061129a565b80601f01602080910402602001604051908101604052809291908181526020018280546103839061129a565b80156103d05780601f106103a5576101008083540402835291602001916103d0565b820191906000526020600020905b8154815290600101906020018083116103b357829003601f168201915b5050505050905090565b6000806103e5610893565b90506103f281858561089b565b600191505092915050565b6000600254905090565b600080610412610893565b905061041f858285610a64565b61042a858585610af0565b60019150509392505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006012905090565b600080610470610893565b9050610491818585610482858961080c565b61048c91906112fa565b61089b565b600191505092915050565b60066020528060005260406000206000915054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546105139061129a565b80601f016020809104026020016040519081016040528092919081815260200182805461053f9061129a565b801561058c5780601f106105615761010080835404028352916020019161058c565b820191906000526020600020905b81548152906001019060200180831161056f57829003601f168201915b5050505050905090565b6000806105a1610893565b905060006105af828661080c565b9050838110156105f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105eb906113a0565b60405180910390fd5b610601828686840361089b565b60019250505092915050565b600080610618610893565b9050610625818585610af0565b600191505092915050565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806106d55750600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610714576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070b90611432565b60405180910390fd5b61071e3382610d66565b50565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a8906114c4565b60405180910390fd5b80600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361090a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090190611556565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610979576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610970906115e8565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a579190611096565b60405180910390a3505050565b6000610a70848461080c565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610aea5781811015610adc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad390611654565b60405180910390fd5b610ae9848484840361089b565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b56906116e6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610bce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc590611778565b60405180910390fd5b610bd9838383610ebc565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c569061180a565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d4d9190611096565b60405180910390a3610d60848484610ec1565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610dd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcc90611876565b60405180910390fd5b610de160008383610ebc565b8060026000828254610df391906112fa565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ea49190611096565b60405180910390a3610eb860008383610ec1565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f00578082015181840152602081019050610ee5565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f2882610ec6565b610f328185610ed1565b9350610f42818560208601610ee2565b610f4b81610f0c565b840191505092915050565b60006020820190508181036000830152610f708184610f1d565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fa882610f7d565b9050919050565b610fb881610f9d565b8114610fc357600080fd5b50565b600081359050610fd581610faf565b92915050565b6000819050919050565b610fee81610fdb565b8114610ff957600080fd5b50565b60008135905061100b81610fe5565b92915050565b6000806040838503121561102857611027610f78565b5b600061103685828601610fc6565b925050602061104785828601610ffc565b9150509250929050565b60008115159050919050565b61106681611051565b82525050565b6000602082019050611081600083018461105d565b92915050565b61109081610fdb565b82525050565b60006020820190506110ab6000830184611087565b92915050565b6000806000606084860312156110ca576110c9610f78565b5b60006110d886828701610fc6565b93505060206110e986828701610fc6565b92505060406110fa86828701610ffc565b9150509250925092565b61110d81610f9d565b82525050565b60006020820190506111286000830184611104565b92915050565b600060ff82169050919050565b6111448161112e565b82525050565b600060208201905061115f600083018461113b565b92915050565b60006020828403121561117b5761117a610f78565b5b600061118984828501610fc6565b91505092915050565b6000602082840312156111a8576111a7610f78565b5b60006111b684828501610ffc565b91505092915050565b6111c881611051565b81146111d357600080fd5b50565b6000813590506111e5816111bf565b92915050565b6000806040838503121561120257611201610f78565b5b600061121085828601610fc6565b9250506020611221858286016111d6565b9150509250929050565b6000806040838503121561124257611241610f78565b5b600061125085828601610fc6565b925050602061126185828601610fc6565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806112b257607f821691505b6020821081036112c5576112c461126b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061130582610fdb565b915061131083610fdb565b9250828201905080821115611328576113276112cb565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061138a602583610ed1565b91506113958261132e565b604082019050919050565b600060208201905081810360008301526113b98161137d565b9050919050565b7f4f6e6c792061646d696e2063616e2063616c6c20746869732066756e6374696f60008201527f6e00000000000000000000000000000000000000000000000000000000000000602082015250565b600061141c602183610ed1565b9150611427826113c0565b604082019050919050565b6000602082019050818103600083015261144b8161140f565b9050919050565b7f4f6e6c792073757065722061646d696e2063616e2063616c6c2074686973206660008201527f756e6374696f6e00000000000000000000000000000000000000000000000000602082015250565b60006114ae602783610ed1565b91506114b982611452565b604082019050919050565b600060208201905081810360008301526114dd816114a1565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611540602483610ed1565b915061154b826114e4565b604082019050919050565b6000602082019050818103600083015261156f81611533565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006115d2602283610ed1565b91506115dd82611576565b604082019050919050565b60006020820190508181036000830152611601816115c5565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061163e601d83610ed1565b915061164982611608565b602082019050919050565b6000602082019050818103600083015261166d81611631565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006116d0602583610ed1565b91506116db82611674565b604082019050919050565b600060208201905081810360008301526116ff816116c3565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611762602383610ed1565b915061176d82611706565b604082019050919050565b6000602082019050818103600083015261179181611755565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006117f4602683610ed1565b91506117ff82611798565b604082019050919050565b60006020820190508181036000830152611823816117e7565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611860601f83610ed1565b915061186b8261182a565b602082019050919050565b6000602082019050818103600083015261188f81611853565b905091905056fea2646970667358221220cd60d8259db782274cea7a91ef08aaf78fecea69a0c6fefd5674b6660ffc517d64736f6c63430008120033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100f55760003560e01c8063429b62e511610097578063a9059cbb11610066578063a9059cbb146102b0578063c634d032146102e0578063dc11a496146102fc578063dd62ed3e14610318576100f5565b8063429b62e51461020257806370a082311461023257806395d89b4114610262578063a457c2d714610280576100f5565b806323b872dd116100d357806323b872dd1461016657806329575f6a14610196578063313ce567146101b457806339509351146101d2576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610348565b60405161010f9190610f56565b60405180910390f35b610132600480360381019061012d9190611011565b6103da565b60405161013f919061106c565b60405180910390f35b6101506103fd565b60405161015d9190611096565b60405180910390f35b610180600480360381019061017b91906110b1565b610407565b60405161018d919061106c565b60405180910390f35b61019e610436565b6040516101ab9190611113565b60405180910390f35b6101bc61045c565b6040516101c9919061114a565b60405180910390f35b6101ec60048036038101906101e79190611011565b610465565b6040516101f9919061106c565b60405180910390f35b61021c60048036038101906102179190611165565b61049c565b604051610229919061106c565b60405180910390f35b61024c60048036038101906102479190611165565b6104bc565b6040516102599190611096565b60405180910390f35b61026a610504565b6040516102779190610f56565b60405180910390f35b61029a60048036038101906102959190611011565b610596565b6040516102a7919061106c565b60405180910390f35b6102ca60048036038101906102c59190611011565b61060d565b6040516102d7919061106c565b60405180910390f35b6102fa60048036038101906102f59190611192565b610630565b005b610316600480360381019061031191906111eb565b610721565b005b610332600480360381019061032d919061122b565b61080c565b60405161033f9190611096565b60405180910390f35b6060600380546103579061129a565b80601f01602080910402602001604051908101604052809291908181526020018280546103839061129a565b80156103d05780601f106103a5576101008083540402835291602001916103d0565b820191906000526020600020905b8154815290600101906020018083116103b357829003601f168201915b5050505050905090565b6000806103e5610893565b90506103f281858561089b565b600191505092915050565b6000600254905090565b600080610412610893565b905061041f858285610a64565b61042a858585610af0565b60019150509392505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006012905090565b600080610470610893565b9050610491818585610482858961080c565b61048c91906112fa565b61089b565b600191505092915050565b60066020528060005260406000206000915054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546105139061129a565b80601f016020809104026020016040519081016040528092919081815260200182805461053f9061129a565b801561058c5780601f106105615761010080835404028352916020019161058c565b820191906000526020600020905b81548152906001019060200180831161056f57829003601f168201915b5050505050905090565b6000806105a1610893565b905060006105af828661080c565b9050838110156105f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105eb906113a0565b60405180910390fd5b610601828686840361089b565b60019250505092915050565b600080610618610893565b9050610625818585610af0565b600191505092915050565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806106d55750600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610714576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070b90611432565b60405180910390fd5b61071e3382610d66565b50565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a8906114c4565b60405180910390fd5b80600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361090a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090190611556565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610979576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610970906115e8565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a579190611096565b60405180910390a3505050565b6000610a70848461080c565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610aea5781811015610adc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad390611654565b60405180910390fd5b610ae9848484840361089b565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b56906116e6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610bce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc590611778565b60405180910390fd5b610bd9838383610ebc565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c569061180a565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d4d9190611096565b60405180910390a3610d60848484610ec1565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610dd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcc90611876565b60405180910390fd5b610de160008383610ebc565b8060026000828254610df391906112fa565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ea49190611096565b60405180910390a3610eb860008383610ec1565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f00578082015181840152602081019050610ee5565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f2882610ec6565b610f328185610ed1565b9350610f42818560208601610ee2565b610f4b81610f0c565b840191505092915050565b60006020820190508181036000830152610f708184610f1d565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fa882610f7d565b9050919050565b610fb881610f9d565b8114610fc357600080fd5b50565b600081359050610fd581610faf565b92915050565b6000819050919050565b610fee81610fdb565b8114610ff957600080fd5b50565b60008135905061100b81610fe5565b92915050565b6000806040838503121561102857611027610f78565b5b600061103685828601610fc6565b925050602061104785828601610ffc565b9150509250929050565b60008115159050919050565b61106681611051565b82525050565b6000602082019050611081600083018461105d565b92915050565b61109081610fdb565b82525050565b60006020820190506110ab6000830184611087565b92915050565b6000806000606084860312156110ca576110c9610f78565b5b60006110d886828701610fc6565b93505060206110e986828701610fc6565b92505060406110fa86828701610ffc565b9150509250925092565b61110d81610f9d565b82525050565b60006020820190506111286000830184611104565b92915050565b600060ff82169050919050565b6111448161112e565b82525050565b600060208201905061115f600083018461113b565b92915050565b60006020828403121561117b5761117a610f78565b5b600061118984828501610fc6565b91505092915050565b6000602082840312156111a8576111a7610f78565b5b60006111b684828501610ffc565b91505092915050565b6111c881611051565b81146111d357600080fd5b50565b6000813590506111e5816111bf565b92915050565b6000806040838503121561120257611201610f78565b5b600061121085828601610fc6565b9250506020611221858286016111d6565b9150509250929050565b6000806040838503121561124257611241610f78565b5b600061125085828601610fc6565b925050602061126185828601610fc6565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806112b257607f821691505b6020821081036112c5576112c461126b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061130582610fdb565b915061131083610fdb565b9250828201905080821115611328576113276112cb565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061138a602583610ed1565b91506113958261132e565b604082019050919050565b600060208201905081810360008301526113b98161137d565b9050919050565b7f4f6e6c792061646d696e2063616e2063616c6c20746869732066756e6374696f60008201527f6e00000000000000000000000000000000000000000000000000000000000000602082015250565b600061141c602183610ed1565b9150611427826113c0565b604082019050919050565b6000602082019050818103600083015261144b8161140f565b9050919050565b7f4f6e6c792073757065722061646d696e2063616e2063616c6c2074686973206660008201527f756e6374696f6e00000000000000000000000000000000000000000000000000602082015250565b60006114ae602783610ed1565b91506114b982611452565b604082019050919050565b600060208201905081810360008301526114dd816114a1565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611540602483610ed1565b915061154b826114e4565b604082019050919050565b6000602082019050818103600083015261156f81611533565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006115d2602283610ed1565b91506115dd82611576565b604082019050919050565b60006020820190508181036000830152611601816115c5565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061163e601d83610ed1565b915061164982611608565b602082019050919050565b6000602082019050818103600083015261166d81611631565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006116d0602583610ed1565b91506116db82611674565b604082019050919050565b600060208201905081810360008301526116ff816116c3565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611762602383610ed1565b915061176d82611706565b604082019050919050565b6000602082019050818103600083015261179181611755565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006117f4602683610ed1565b91506117ff82611798565b604082019050919050565b60006020820190508181036000830152611823816117e7565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611860601f83610ed1565b915061186b8261182a565b602082019050919050565b6000602082019050818103600083015261188f81611853565b905091905056fea2646970667358221220cd60d8259db782274cea7a91ef08aaf78fecea69a0c6fefd5674b6660ffc517d64736f6c63430008120033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}