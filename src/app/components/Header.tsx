import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const Header = () => {
  const { publicKey } = useWallet()

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Votee</h1>
        <WalletMultiButton />
      </div>
    </header>
  )
}

export default Header