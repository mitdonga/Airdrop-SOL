// Import necessary modules from @solana/web3.js
const { Connection, PublicKey, Keypair, clusterApiUrl, LAMPORTS_PER_SOL } = require("@solana/web3.js")

// Generate a new keypair for the wallet
const wallet = Keypair.generate()

// Get the public key of the wallet
const publicKey = new PublicKey(wallet.publicKey)

// Define the cluster URL (devnet or local for testing)
const clusterUrl = clusterApiUrl('devnet') // local node url http://localhost:8899

const secretKey = wallet.secretKey

async function getWalletBalance() {
    try {
        // Connect to the Solana cluster
        const connection = new Connection(clusterUrl, 'confirmed')

        // Get the balance of the wallet
        const balance = await connection.getBalance(publicKey)

        // Log the wallet balance
        console.log("Wallet balance is ", balance)
    } catch(err) {
        // Handle errors
        console.error(err)
    }
}

// Function to perform the airdrop
async function airDrop(sols){
    try {
        const connection = new Connection(clusterUrl, 'confirmed')

        // Request an airdrop of SOL tokens to the wallet
        const airdropSignature = await connection.requestAirdrop(publicKey, sols * LAMPORTS_PER_SOL)

        // Confirm the transaction
        await connection.confirmTransaction(airdropSignature)
        console.log(`Airdropping ${sols} SOLs done.`)
    } catch (err) {
        console.error(err)
    }
}

async function main() {
    // Get the wallet balance before the airdrop
    await getWalletBalance()

    // Perform the airdrop
    await airDrop(1)

    // Get the wallet balance after the airdrop
    await getWalletBalance()
}

// Call the main function to execute the script
main()
