'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock ethers.js functionality
const mockEthers = {
    connectWallet: () => new Promise(resolve => setTimeout(() => resolve({ address: '0x123...abc' }), 1000)),
    mintNFT: (metadata) => new Promise((resolve, reject) => {
        setTimeout(() => {
            // 95% chance of success
            if (Math.random() > 0.05) {
                resolve({
                    transactionHash: `0x${Math.random().toString(16).substring(2)}`,
                    tokenId: Math.floor(Math.random() * 10000)
                });
            } else {
                reject(new Error('Transaction failed'));
            }
        }, 2000);
    })
};

// Step names for the minting process
const steps = [
    { id: 'connect', label: 'Connect Wallet' },
    { id: 'prepare', label: 'Prepare Metadata' },
    { id: 'upload', label: 'Upload to IPFS' },
    { id: 'mint', label: 'Mint on Polygon' },
    { id: 'confirm', label: 'Confirm Transaction' }
];

const MintNFTButton = ({
    productId,
    productName,
    productImage,
    weaverId,
    metadata = {},
    onSuccess
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState('connect');
    const [wallet, setWallet] = useState(null);
    const [txHash, setTxHash] = useState(null);
    const [tokenId, setTokenId] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        // Only allow closing if not in the middle of a transaction
        if (!isLoading) {
            setIsOpen(false);

            // Reset state after animation completes
            setTimeout(() => {
                if (!txHash) {
                    setCurrentStep('connect');
                    setWallet(null);
                    setError(null);
                }
            }, 300);
        }
    };

    const connectWallet = async () => {
        try {
            setIsLoading(true);
            setError(null);

            // Connect wallet using ethers.js
            const walletData = await mockEthers.connectWallet();
            setWallet(walletData);
            setCurrentStep('prepare');
        } catch (err) {
            setError(`Failed to connect wallet: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const startMinting = async () => {
        try {
            setIsLoading(true);
            setError(null);
            setCurrentStep('prepare');

            // Prepare metadata for the NFT
            const nftMetadata = {
                name: productName,
                description: 'An authentic handloom saree from 11Sari.com',
                image: productImage,
                attributes: [
                    { trait_type: 'Product ID', value: productId },
                    { trait_type: 'Weaver ID', value: weaverId },
                    ...Object.entries(metadata).map(([key, value]) => ({
                        trait_type: key,
                        value
                    }))
                ]
            };

            // Simulate uploading to IPFS
            setCurrentStep('upload');
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Mint the NFT on Polygon Mumbai
            setCurrentStep('mint');
            const result = await mockEthers.mintNFT(nftMetadata);
            setTxHash(result.transactionHash);
            setTokenId(result.tokenId);

            // Confirm transaction
            setCurrentStep('confirm');

            // Trigger success callback if provided
            if (onSuccess) {
                onSuccess({
                    txHash: result.transactionHash,
                    tokenId: result.tokenId
                });
            }
        } catch (err) {
            setError(`Minting failed: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    // Get the current step index
    const getCurrentStepIndex = () => steps.findIndex(step => step.id === currentStep);

    // Modal animation variants
    const modalVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } }
    };

    // Backdrop variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <>
            <button
                onClick={openModal}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium px-4 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
                Mint as NFT
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <motion.div
                        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl w-full max-w-md mx-auto overflow-hidden"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-white text-xl font-bold">Mint Your Saree NFT</h2>
                                {!isLoading && (
                                    <button
                                        onClick={closeModal}
                                        className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {/* Progress Indicator */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between">
                                    {steps.map((step, index) => (
                                        <React.Fragment key={step.id}>
                                            {/* Step circle */}
                                            <div className="flex flex-col items-center">
                                                <div
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${index < getCurrentStepIndex() ? 'bg-green-500 text-white' :
                                                            index === getCurrentStepIndex() ? 'bg-blue-500 text-white' :
                                                                'bg-gray-700 text-gray-400'
                                                        }`}
                                                >
                                                    {index < getCurrentStepIndex() ? '✓' : index + 1}
                                                </div>
                                                <span className={`text-xs mt-1 ${index === getCurrentStepIndex() ? 'text-blue-400' : 'text-gray-500'
                                                    }`}>
                                                    {step.label}
                                                </span>
                                            </div>

                                            {/* Connector line */}
                                            {index < steps.length - 1 && (
                                                <div
                                                    className={`h-0.5 w-full mx-1 ${index < getCurrentStepIndex() ? 'bg-green-500' : 'bg-gray-700'
                                                        }`}
                                                ></div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Connect Wallet Step */}
                            {currentStep === 'connect' && (
                                <div className="text-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/2/24/Polygon_blockchain_logo.png"
                                        alt="Polygon Logo"
                                        className="w-16 h-16 mx-auto mb-4"
                                    />
                                    <h3 className="text-white text-lg font-medium mb-2">Connect Your Wallet</h3>
                                    <p className="text-gray-400 mb-6">
                                        Connect your crypto wallet to mint this beautiful saree as an NFT on Polygon.
                                    </p>

                                    <button
                                        onClick={connectWallet}
                                        disabled={isLoading}
                                        className={`w-full py-3 rounded-full text-white font-medium ${isLoading
                                                ? 'bg-gray-700 cursor-not-allowed'
                                                : 'bg-blue-600 hover:bg-blue-500'
                                            }`}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Connecting...
                                            </span>
                                        ) : 'Connect Wallet'}
                                    </button>
                                </div>
                            )}

                            {/* Preparation and Minting Steps */}
                            {(currentStep === 'prepare' || currentStep === 'upload' || currentStep === 'mint') && (
                                <div className="text-center">
                                    <div className="rounded-lg bg-gray-800 p-4 mb-6">
                                        <p className="text-gray-300 text-sm mb-2">Wallet Connected:</p>
                                        <p className="text-white font-mono text-sm">{wallet?.address || '0x123...abc'}</p>
                                    </div>

                                    <h3 className="text-white text-lg font-medium mb-2">
                                        {currentStep === 'prepare' && 'Preparing Metadata'}
                                        {currentStep === 'upload' && 'Uploading to IPFS'}
                                        {currentStep === 'mint' && 'Minting on Polygon'}
                                    </h3>

                                    <p className="text-gray-400 mb-6">
                                        {currentStep === 'prepare' && 'We are preparing the metadata for your Saree NFT.'}
                                        {currentStep === 'upload' && 'Uploading your saree information to decentralized storage.'}
                                        {currentStep === 'mint' && 'Creating your unique NFT on the Polygon blockchain.'}
                                    </p>

                                    {currentStep === 'prepare' && !isLoading && (
                                        <button
                                            onClick={startMinting}
                                            className="w-full py-3 rounded-full text-white font-medium bg-blue-600 hover:bg-blue-500"
                                        >
                                            Begin Minting Process
                                        </button>
                                    )}

                                    {isLoading && (
                                        <div className="flex flex-col items-center">
                                            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                                            <p className="text-gray-300">
                                                {currentStep === 'prepare' && 'Preparing...'}
                                                {currentStep === 'upload' && 'Uploading...'}
                                                {currentStep === 'mint' && 'Minting...'}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Confirmation Step */}
                            {currentStep === 'confirm' && (
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>

                                    <h3 className="text-white text-lg font-medium mb-2">NFT Minted Successfully!</h3>

                                    <div className="rounded-lg bg-gray-800 p-4 mb-4">
                                        <div className="mb-3">
                                            <p className="text-gray-400 text-xs mb-1">Transaction Hash:</p>
                                            <p className="text-white font-mono text-sm truncate">{txHash}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs mb-1">Token ID:</p>
                                            <p className="text-white font-mono text-sm">{tokenId}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={closeModal}
                                            className="flex-1 py-2.5 rounded-full text-white font-medium border border-gray-600 hover:bg-gray-700"
                                        >
                                            Close
                                        </button>
                                        <a
                                            href={`https://mumbai.polygonscan.com/tx/${txHash}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-2.5 rounded-full text-white font-medium bg-blue-600 hover:bg-blue-500"
                                        >
                                            View on Explorer
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Error State */}
                            {error && (
                                <div className="mt-4 p-3 bg-red-900/50 border border-red-500 rounded-lg">
                                    <p className="text-red-300 text-sm">{error}</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default MintNFTButton; 