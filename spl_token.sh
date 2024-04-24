# Install Rust & Solana

# Create wallet
solana-keygen new

# Check public key/address
solana-keygen pubkey   # returns the public key

# Check balance on Devnet
solana balance {public_key}

# Airdrop 2 SOL
solana airdrop 2 {public_key}

# Go to https://explorer.solana.com/?cluster=devnet and enter your public key. 
# This will show your wallet details like balance, transactions, etc.

# Create a token (Your Cryptocurrency)
spl-token create-token  
# return token_address: AMjHf6avvRWKkVn6qT5WfAZdnY7QRa6bS1L7W84wQCbJ

# Create a token account
spl-token create-account {token_address} 
# return token_account: Tf8DjsTLUhDMCBFNBNzWLfLJgyqhQTV12zVi7t6KsNT

spl-token balance {token_account} 
# return 0

# Mint (create copies) 1001 tokens
spl-token mint {token_address} 1001

spl-token balance {token_account} 
# return 1001 (updated token balance after minting)

spl-token supply {token_address}
# return total no. of tokens

# Permanetly disable minting of tokens
spl-token authorize {token_address} mint --disable

# Burn/remove 50 tokens
spl-token burn {token_account} 50

# Transfer 100 token to other wallet
spl-token transfer {token_address} 100 {receiver_wallet_address} --fund-recipient






