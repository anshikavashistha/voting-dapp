# Votee - Solana Voting DApp

A decentralized voting application built on Solana blockchain using Anchor framework and Next.js. Votee allows users to create polls, register as candidates, and vote on various topics in a transparent and secure manner.

## 🚀 Features

- **Poll Creation**: Create polls with custom descriptions and time ranges
- **Candidate Registration**: Register as a candidate for any poll
- **Secure Voting**: One vote per user per poll using Solana's cryptographic security
- **Real-time Results**: View live vote counts and poll statistics
- **Wallet Integration**: Connect with Solana wallets (Phantom, Solflare, etc.)
- **Responsive Design**: Modern UI built with Tailwind CSS

## 🏗️ Architecture

### Frontend
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Wallet Integration**: Solana Wallet Adapter
- **UI Components**: Custom components with React Icons

### Backend (Smart Contract)
- **Framework**: Anchor (Solana's development framework)
- **Language**: Rust
- **Network**: Solana (localnet/devnet)


## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v16 or higher)
- Rust (latest stable version)
- Solana CLI tools
- Anchor framework
- A Solana wallet (Phantom recommended)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd voting-dapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Anchor**
   ```bash
   # Install Rust
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   
   # Install Solana CLI
   sh -c "$(curl -sSfL https://release.solana.com/v1.17.0/install)"
   
   # Install Anchor
   npm install -g @coral-xyz/anchor-cli
   ```

4. **Setup Solana environment**
   ```bash
   # For local development
   solana config set --url localhost
   solana-keygen new --outfile ~/.config/solana/id.json
   ```

## 🚀 Getting Started

### 1. Start Solana Local Validator
```bash
solana-test-validator
```

### 2. Build and Deploy Smart Contract
```bash
# Build the Anchor program
npm run anchor-build

# Deploy to localnet
npm run anchor-localnet
```

### 3. Start the Frontend
```bash
# Development mode
npm run dev

# Or build and start production
npm run build
npm start
```

### 4. Access the Application
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Usage

### Creating a Poll
1. Connect your Solana wallet
2. Click "Initialize" if it's your first time using the app
3. Navigate to "Create Poll" page
4. Fill in poll details:
   - Description
   - Start date/time
   - End date/time
5. Submit the transaction

### Registering as a Candidate
1. Go to a poll's detail page
2. Click "Candidates" button
3. Fill in your candidate name
4. Submit registration transaction

### Voting
1. Visit any active poll
2. View available candidates
3. Click "Vote" next to your preferred candidate
4. Approve the transaction in your wallet

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_RPC_URL=http://127.0.0.1:8899
```

### Anchor Configuration
The Anchor configuration is located in `anchor/Anchor.toml`:

```toml
[programs.localnet]
votee = "FQSjkWA6Sb6PcEJm693XsX9GETY7zhArPcPkkuLwdGws"

[programs.devnet]
votee = "FQSjkWA6Sb6PcEJm693XsX9GETY7zhArPcPkkuLwdGws"

[provider]
cluster = "localnet"
wallet = "~/.config/solana/id.json"
```

## 📁 Project Structure

```
voting-dapp/
├── anchor/                    # Solana smart contract
│   ├── programs/
│   │   └── votee/
│   ├── target/
│   │   ├── idl/              # Interface definitions
│   │   └── types/            # TypeScript types
│   └── Anchor.toml
├── src/
│   └── app/
│       ├── components/        # React components
│       ├── services/          # Blockchain interactions
│       ├── store/            # Redux state management
│       ├── utils/            # Utilities and interfaces
│       └── pages/            # Next.js pages
└── package.json
```

## 🧪 Testing

Run the Anchor tests:
```bash
npm run anchor-test
```

Run frontend tests:
```bash
npm run lint
```

## 🚀 Deployment

### Deploy to Devnet
1. Update `Anchor.toml` to use devnet
2. Build and deploy:
   ```bash
   anchor build
   anchor deploy --provider.cluster devnet
   ```

### Deploy Frontend
Deploy to your preferred platform (Vercel, Netlify, etc.):
```bash
npm run build
```

## 🔒 Security Features

- **One Vote Per User**: Cryptographic proof prevents double voting
- **Time-bound Polls**: Automatic poll expiration
- **Wallet Authentication**: Secure user identification
- **Transaction Signing**: All operations require wallet approval

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **"Wallet not connected"**
   - Ensure your wallet is properly installed and unlocked
   - Check if you're on the correct network (localhost for development)

2. **"Transaction failed"**
   - Verify you have sufficient SOL for transaction fees
   - Check if the local validator is running

3. **"Program not found"**
   - Make sure the smart contract is deployed
   - Verify the program ID in your configuration

### Getting Help

- Check the [Solana Documentation](https://docs.solana.com/)
- Visit [Anchor Documentation](https://www.anchor-lang.com/)
- Open an issue in this repository

## 🔮 Future Enhancements

- [ ] Poll categories and tags
- [ ] Advanced voting mechanisms (ranked choice, etc.)
- [ ] Poll analytics and charts
- [ ] Social features (comments, sharing)
- [ ] Mobile app development
- [ ] Integration with other Solana programs

---

**Built with ❤️ using Solana, Anchor, and Next.js**
