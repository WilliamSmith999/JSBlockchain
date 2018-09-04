const SHA256 = require("crypto-js/sha256");

class Transaction{
	constructor(from, to, amount){
		this.from = from;
		this.to = to;
		this.amount = amount;
	}
}

class Block {
    constructor(timestamp, transactions, previousHash = '') {
        this.previousHash = previousHash;
        this.timestamp = timestamp;
       // this.data = data;
		this.transactions = transactions;
        this.hash = this.calculateHash();
		this.nonce = 0;
    }

    calculateHash() {
      return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }
	
	mineBlock(diff){
		while(this.hash.substring(0, diff) != Array(diff + 1).join("0")){
			this.nonce++;
			this.hash = this.calculateHash();
		}
	}
}

class Blockchain{
    constructor() {
        this.chain = [this.createGenesisBlock()];
		this.diff = 10;
		this.pendingTansactions = [];
		this.miningReward = 100;
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2017", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress){
		let block = new Block(Date.now(), this.pendingTansactions);
		block.mineBlock(this.diff);
		
		console.log('Block successfully mined!');
		this.chain.push(block);
		
		this.pendingTansactions = [
			new Transaction(null, miningRewardAddress, this.miningReward)
		];
	}
	
	createTransaction(transaction){
		this.pendingTansactions.push(transaction);
	}
	
	getBalanceOfAddress(address){
		let balance = 0;
		
		for(const block of this.chain){
			for(const trans of block.transactions){
				if(trans.from === address){
					balance -= trans.amount;
				}
				if(trans.to === address){
					balance += trans.amount;
				}
			}
		}
		return balance;
	}
	
    isChainValid() {
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}

let savjeeCoin = new Blockchain();


console.log('Blockchain valid? ' + savjeeCoin.isChainValid());
