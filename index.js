const {
	Connection,
	PublicKey,
	Keypair,
	clusterApiUrl,
	LAMPORTS_PER_SOL
} = require("@solana/web3.js")

const wallet = new Keypair()
const publicKey = new PublicKey(wallet.publicKey)
// const clusterUrl = clusterApiUrl('devnet')
const clusterUrl = "http://127.0.0.1:8899"
const secretKey = wallet.secretKey

async function getWalletBalance() {
	try {
		const connection = new Connection(clusterUrl, 'confirmed')
		const balance = await connection.getBalance(publicKey)
		console.log("Wallet balance: ", balance)
	} catch(err) {
		console.error(err)
	}
}

async function airDrop(sols){
	try {
		const connection = new Connection(clusterUrl, 'confirmed')
		const airdropSignature = await connection.requestAirdrop(publicKey, sols * LAMPORTS_PER_SOL)
		await connection.confirmTransaction(airdropSignature)
	} catch (err) {
		console.error(err)
	}
}

async function main() {
	await getWalletBalance()
	await airDrop(3)
	await getWalletBalance()
}

main()
