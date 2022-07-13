import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import ProgressBar from '../components/ProgressBar'
import { toast } from 'react-toastify';
import { MythOfAshaNFT as ContractType } from 'ethContract/NftContractType';
import { Web3Provider, ExternalProvider } from '@ethersproject/providers';
import NetworkConfigInterface from 'ethContract/NetworkConfigInterface';
import * as Networks from '../ethContract/Networks';
import { BigNumber, ethers } from 'ethers';
import Whitelist from 'ethContract/Whitelist';
import { openSea } from 'ethContract/Marketplaces';
import detectEthereumProvider from '@metamask/detect-provider';

export default function MintEthPage(props: any) {
  const ContractAbi = require('../ethContract/Contract.json').abi;
  const contractAddress = '0x06072CB6E09658491Ac5ddDeFD1043986f16cf0b';
  const nftShowcase = process.env.REACT_APP_SAMPLE_MINT_NFT
    || 'https://picsum.photos/1366/1366';

  let provider: Web3Provider;
  let contract: ContractType;

  const [userAddress, setUserAddress] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string | JSX.Element | null>();
  const [network, setNetwork] = useState<ethers.providers.Network>();
  const [networkConfig, setNetworkConfig] = useState<NetworkConfigInterface>();
  const [merkleProofManualAddress, setMerkleProofManualAddress] = useState<string>();
  const [merkleProofManualAddressFeedbackMessage, setMerkleProofManualAddressFeedbackMessage] = useState<string | JSX.Element>();
  const [maxSupply, setMaxSupply] = useState<number>();
  const [totalSupply, setTotalSupply] = useState<number>();
  const [maxMintAmountPerTx, setMaxMintAmountPerTx] = useState<number>();
  const [tokenPrice, setTokenPrice] = useState<BigNumber>();
  const [isPaused, setIsPaused] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>();
  const [isWhitelistMintEnabled, setIsWhitelistMintEnabled] = useState<boolean>();
  const [isUserInWhitelist, setIsUserInWhitelist] = useState<boolean>();

  const connectWallet = async () => {
    try {
      await provider.provider.request!({ method: 'eth_requestAccounts' });
      initWallet();
    } catch (e) {
      setError(e);
    }
  }

  const initWallet = async () => {
    const walletAccounts = await provider.listAccounts();

    if (walletAccounts.length === 0) {
      return;
    }

    const network = await provider.getNetwork();
    let networkConfig: NetworkConfigInterface;

    if (network.chainId === Networks.ethereumMainnet.chainId) {
      networkConfig = Networks.ethereumMainnet;
    } else if (network.chainId === Networks.ethereumTestnet.chainId) {
      networkConfig = Networks.ethereumTestnet;
    } else {
      setError('Unsupported network!');
      return;
    }

    setUserAddress(walletAccounts[0]);
    setNetwork(network);
    setNetworkConfig(networkConfig);

    if (await provider.getCode(contractAddress!) === '0x') {
      setError('Could not find the contract, are you connected to the right chain?');
      return;
    }

    contract = new ethers.Contract(
      contractAddress!,
      ContractAbi,
      provider.getSigner(),
    ) as ContractType;

    refreshContractState();
  }

  const registerWalletEvents = (browserProvider: ExternalProvider) => {

    // @ts-ignore
    browserProvider.on('accountsChanged', () => {
      initWallet();
    });

    // @ts-ignore
    browserProvider.on('chainChanged', () => {
      window.location.reload();
    });
  }

  const refreshContractState = async () => {
    setMaxSupply((await contract.maxSupply()).toNumber());
    setTotalSupply((await contract.totalSupply()).toNumber());
    setMaxMintAmountPerTx((await contract.maxMintAmountPerTx()).toNumber());
    setTokenPrice(await contract.cost());
    setIsPaused(await contract.paused());
    setIsWhitelistMintEnabled(await contract.whitelistMintEnabled());
    setIsUserInWhitelist(Whitelist.contains(userAddress || ''));
  }

  const generateContractUrl = () => {
    return networkConfig!.blockExplorer.generateContractUrl(contractAddress!);
  }

  const generateMarketplaceUrl = () => {
    return openSea.generateCollectionUrl('my-nft-token', !isNotMainnet());
  }

  const generateTransactionUrl = (transactionHash: string) => {
    return networkConfig!.blockExplorer.generateTransactionUrl(transactionHash);
  }

  const isWalletConnected = () => {
    return userAddress !== null;
  }

  const isContractReady = () => {
    return contract !== undefined;
  }

  const isSoldOut = () => {
    return maxSupply !== 0 && totalSupply! >= maxSupply!;
  }

  const isNotMainnet = () => {
    return network !== null && network?.chainId !== Networks.ethereumMainnet.chainId;
  }

  const copyMerkleProofToClipboard = () => {
    const merkleProof = Whitelist.getRawProofForAddress(userAddress ?? merkleProofManualAddress!);

    if (merkleProof.length < 1) {
      setMerkleProofManualAddressFeedbackMessage('The given address is not in the whitelist, please double-check.');
      return;
    }

    navigator.clipboard.writeText(merkleProof);

    setMerkleProofManualAddressFeedbackMessage((
      <>
        <strong>Congratulations!</strong> <span className="emoji">🎉</span><br />
        Your Merkle Proof <strong>has been copied to the clipboard</strong>. You can paste it into <a href={generateContractUrl()} target="_blank">{networkConfig!.blockExplorer.name}</a> to claim your tokens.
      </>
    ));
  }
  
  const setError = (error: any = null) => {
    let errorMessage = 'Unknown error...';

    if (null === error || typeof error === 'string') {
      errorMessage = error;
    } else if (typeof error === 'object') {
      // Support any type of error from the Web3 Provider...
      if (error?.error?.message !== undefined) {
        errorMessage = error.error.message;
      } else if (error?.data?.message !== undefined) {
        errorMessage = error.data.message;
      } else if (error?.message !== undefined) {
        errorMessage = error.message;
      } else if (React.isValidElement(error)) {
        setErrorMessage(error);
        return;
      }
    }

    setErrorMessage(null === errorMessage ? null : errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1));
  }

  // MINTING FUNCTION

  const mintTokens = async (amount: number) => {
    try {
      setLoading(true);
      const transaction = await contract.mint(amount, {value: tokenPrice!.mul(amount)});

      toast.info(<>
        Transaction sent! Please wait...<br/>
        <a href={generateTransactionUrl(transaction.hash)} target="_blank" rel="noreferrer">
          View on {networkConfig!.blockExplorer.name}\
        </a>
      </>);

      const receipt = await transaction.wait();

      toast.success(<>
        Success!<br />
        <a href={generateTransactionUrl(receipt.transactionHash)} target="_blank" rel="noreferrer">
          View on {networkConfig!.blockExplorer.name}
        </a>
      </>);

      refreshContractState();
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  const whitelistMintTokens = async (amount: number) => {
    try {
      setLoading(true);
      const transaction = await contract.whitelistMint(amount, Whitelist.getProofForAddress(userAddress!), {value: tokenPrice!.mul(amount)});

      toast.info(<>
        Transaction sent! Please wait...<br/>
        <a href={generateTransactionUrl(transaction.hash)} target="_blank" rel="noreferrer">
          View on {networkConfig!.blockExplorer.name}
        </a>
      </>);

      const receipt = await transaction.wait();

      toast.success(<>
        Success!<br />
        <a href={generateTransactionUrl(receipt.transactionHash)} target="_blank" rel="noreferrer">
          View on {networkConfig!.blockExplorer.name}
        </a>
      </>);

      refreshContractState();
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  // life cycle

  useEffect(() => {
    const init = async () => {
      const browserProvider = await detectEthereumProvider() as ExternalProvider;
  
      if (browserProvider?.isMetaMask !== true) {
        setError(
          <>
            We were not able to detect <strong>MetaMask</strong>. We value <strong>privacy and security</strong> a lot so we limit the wallet options on the DAPP.<br />
            <br />
            But don't worry! <span className="emoji">😃</span> You can always interact with the smart-contract through <a href={generateContractUrl()} target="_blank" rel='noreferrer'>{networkConfig!.blockExplorer.name}</a> and <strong>we do our best to provide you with the best user experience possible</strong>, even from there.<br />
            <br />
            You can also get your <strong>Whitelist Proof</strong> manually, using the tool below.
          </>,
        );
      }
  
      provider = new ethers.providers.Web3Provider(browserProvider);
      registerWalletEvents(browserProvider);
      await initWallet();
    }

    init();
  }, [])

  return (
    <div className="container">
      <Navbar/>

      <Footer/>
    </div>
  )
}