import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const tokenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  deployedAddress: { type: String, required: true },
  network: { type: Number, required: true },
  image: { type: String }
}, {
  timestamps: true
});

const Token = mongoose.model('Token', tokenSchema);

const tokenLists = [
  {
    "name": "WETH",
    "symbol": "WETH",
    "deployedAddress": "0x4200000000000000000000000000000000000006",
    "image": "https://img.cryptorank.io/coins/weth1701090834118.png",
    "network": 8453,
  },
  {
    "name": "USDC",
    "symbol": "USDC",
    "deployedAddress": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    "image": "https://img.cryptorank.io/coins/usd%20coin1634317395959.png",
    "network": 8453,
  },
  {
    "name": "MANTRA",
    "symbol": "OM",
    "deployedAddress": "0x3992B27dA26848C2b19CeA6Fd25ad5568B68AB98",
    "image": "https://img.cryptorank.io/coins/mantra1710835985212.png",
    "network": 8453,
  },
  {
    "name": "WETH",
    "symbol": "WETH",
    "deployedAddress": "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    "image": "https://img.cryptorank.io/coins/weth1701090834118.png",
    "network": 42161,
  },
  {
    "name": "USDC",
    "symbol": "USDC",
    "deployedAddress": "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
    "image": "https://img.cryptorank.io/coins/usd%20coin1634317395959.png",
    "network": 42161,
  },
  {
    "name": "Tether",
    "symbol": "USDT",
    "deployedAddress": "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    "image": "https://img.cryptorank.io/coins/tether1645007690922.png",
    "network": 42161,
  },
  {
    "name": "WETH",
    "symbol": "WETH",
    "deployedAddress": "0xA51894664A773981C6C112C43ce576f315d5b1B6",
    "image": "https://img.cryptorank.io/coins/weth1701090834118.png",
    "network": 167000,
  },
  {
    "name": "USDC",
    "symbol": "USDC",
    "deployedAddress": "0x07d83526730c7438048D55A4fc0b850e2aaB6f0b",
    "image": "https://img.cryptorank.io/coins/usd%20coin1634317395959.png",
    "network": 167000,
  },
  {
    "name": "Tether",
    "symbol": "USDT",
    "deployedAddress": "0x9c2dc7377717603eB92b2655c5f2E7997a4945BD",
    "image": "https://img.cryptorank.io/coins/tether1645007690922.png",
    "network": 167000,
  },
]

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  for (const token of tokenLists) {
    await Token.updateOne(
      { name: token.name, network: token.network },
      {
        $set: {
          symbol: token.symbol,
          deployedAddress: token.deployedAddress,
          image: token.image
        }
      },
      { upsert: true }
    )
  }
}

main()
  .then(() => console.log("DONE"))
  .catch(console.error)
  .finally(() => process.exit(0));