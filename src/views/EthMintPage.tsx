import React from 'react';
import { ethers, BigNumber, utils } from 'ethers'
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
import detectEthereumProvider from '@metamask/detect-provider';
import { MacacaNFT as NftContractType } from '../ethContract/NftContractType';
import CollectionConfig from '../ethContract/CollectionConfig';
import NetworkConfigInterface from '../interfaces/NetworkConfigInterface';
import CollectionStatus from '../components/EthCollectionStatus';
import MintWidget from '../components/EthMintWidget';
import Whitelist from '../ethContract/Whitelist';
import { toast } from 'react-toastify';
import Navbar from 'components/Navbar';
import ProgressBar from 'components/ProgressBar';
import { Link } from 'react-router-dom';

const ContractAbi = require('../ethContract/Contract.json').abi;

interface Props {
}

interface State {
  userAddress: string|null;
  network: ethers.providers.Network|null;
  networkConfig: NetworkConfigInterface;
  totalSupply: number;
  maxSupply: number;
  maxMintAmountPerTx: number;
  tokenPrice: BigNumber;
  isPaused: boolean;
  loading: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  merkleProofManualAddress: string;
  merkleProofManualAddressFeedbackMessage: string|JSX.Element|null;
  errorMessage: string|JSX.Element|null;
  activeTabs: string;
}

const defaultState: State = {
  userAddress: null,
  network: null,
  networkConfig: CollectionConfig.mainnet,
  totalSupply: 0,
  maxSupply: 0,
  maxMintAmountPerTx: 0,
  tokenPrice: BigNumber.from(0),
  isPaused: true,
  loading: false,
  isWhitelistMintEnabled: false,
  isUserInWhitelist: false,
  merkleProofManualAddress: '',
  merkleProofManualAddressFeedbackMessage: null,
  errorMessage: null,
  activeTabs: 'roadmap'
};

export default class EthMintPage extends React.Component<Props, State> {
  provider!: Web3Provider;

  contract!: NftContractType;

  private merkleProofManualAddressInput!: HTMLInputElement;

  private nftShowcase = process.env.REACT_APP_SAMPLE_MINT_NFT
    || 'https://picsum.photos/1366/1366';

  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  componentDidMount = async () => {
    const browserProvider = await detectEthereumProvider() as ExternalProvider;

    if (browserProvider?.isMetaMask !== true) {
      this.setError(
        <>
          We were not able to detect <strong>MetaMask</strong>. We value <strong>privacy and security</strong> a lot so we limit the wallet options on the DAPP.<br />
          <br />
          But don't worry! <span className="emoji">😃</span> You can always interact with the smart-contract through <a href={this.generateContractUrl()} target="_blank" rel='noreferrer'>{this.state.networkConfig.blockExplorer.name}</a> and <strong>we do our best to provide you with the best user experience possible</strong>, even from there.<br />
          <br />
          You can also get your <strong>Whitelist Proof</strong> manually, using the tool below.
        </>,
      );
    }

    this.provider = new ethers.providers.Web3Provider(browserProvider);

    this.registerWalletEvents(browserProvider);

    await this.initWallet();
  }

  async mintTokens(amount: number): Promise<void>
  {
    try {
      this.setState({loading: true});
      const transaction = await this.contract.mint(amount, {value: this.state.tokenPrice.mul(amount)});

      toast.info(<>
        Transaction sent! Please wait...<br/>
        <a href={this.generateTransactionUrl(transaction.hash)} target="_blank" rel="noreferrer">View on {this.state.networkConfig.blockExplorer.name}</a>
      </>);

      const receipt = await transaction.wait();

      toast.success(<>
        Success!<br />
        <a href={this.generateTransactionUrl(receipt.transactionHash)} target="_blank" rel="noreferrer">View on {this.state.networkConfig.blockExplorer.name}</a>
      </>);

      this.refreshContractState();
      this.setState({loading: false});
    } catch (e) {
      this.setError(e);
      this.setState({loading: false});
    }
  }

  async whitelistMintTokens(amount: number): Promise<void>
  {
    try {
      this.setState({loading: true});
      const transaction = await this.contract.whitelistMint(amount, Whitelist.getProofForAddress(this.state.userAddress!), {value: this.state.tokenPrice.mul(amount)});

      toast.info(<>
        Transaction sent! Please wait...<br/>
        <a href={this.generateTransactionUrl(transaction.hash)} target="_blank" rel="noreferrer">View on {this.state.networkConfig.blockExplorer.name}</a>
      </>);

      const receipt = await transaction.wait();

      toast.success(<>
        Success!<br />
        <a href={this.generateTransactionUrl(receipt.transactionHash)} target="_blank" rel="noreferrer">View on {this.state.networkConfig.blockExplorer.name}</a>
      </>);

      this.refreshContractState();
      this.setState({loading: false});
    } catch (e) {
      this.setError(e);
      this.setState({loading: false});
    }
  }

  private isWalletConnected(): boolean
  {
    return this.state.userAddress !== null;
  }

  private isContractReady(): boolean
  {
    return this.contract !== undefined;
  }

  private isSoldOut(): boolean
  {
    return this.state.maxSupply !== 0 && this.state.totalSupply >= this.state.maxSupply;
  }

  private isNotMainnet(): boolean
  {
    return this.state.network !== null && this.state.network.chainId !== CollectionConfig.mainnet.chainId;
  }

  private copyMerkleProofToClipboard(): void
  {
    const merkleProof = Whitelist.getRawProofForAddress(this.state.userAddress ?? this.state.merkleProofManualAddress);

    if (merkleProof.length < 1) {
      this.setState({
        merkleProofManualAddressFeedbackMessage: 'The given address is not in the whitelist, please double-check.',
      });

      return;
    }

    navigator.clipboard.writeText(merkleProof);

    this.setState({
      merkleProofManualAddressFeedbackMessage:
      <>
        <strong>Congratulations!</strong> <span className="emoji">🎉</span><br />
        Your Merkle Proof <strong>has been copied to the clipboard</strong>. You can paste it into <a href={this.generateContractUrl()} target="_blank" rel='noreferrer'>{this.state.networkConfig.blockExplorer.name}</a> to claim your tokens.
      </>,
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <Navbar/>

          <div className="d-flex mb-4" style={{ gap: 20 }}>
            <div className='text-center' style={{ flexGrow: 1 }}>
              <img src={this.nftShowcase} alt="" className='rounded mb-4 d-block mx-auto' style={{ width: 460, height: 460, objectFit: 'cover' }} />
              {this.isContractReady() && (
                <>
                  <div className='text-center mx-auto' style={{ width: 430 }}>
                    <ProgressBar value={(this.state.totalSupply || 0) / (this.state.maxSupply || 0) * 100}/>
                    <div className='fw-bold mt-3' style={{ fontSize: 20 }}>{this.state.maxSupply - this.state.totalSupply} / {this.state.maxSupply}</div>
                    <div className="fw-bold mt-2" style={{ fontSize: 16 }}>
                      <span>Total Items {this.state.maxSupply}</span>
                      <span className="mx-3">|</span>
                      <span>
                        Price {utils.formatEther(this.state.tokenPrice)} {this.state.networkConfig.symbol}
                      </span>
                    </div>
                    <div className='mt-4'>
                      <Link to={'/nft'}>
                        <button className="btn btn-white px-4 rounded-pill fw-bold" style={{ transform: 'none' }}>
                          View Collection
                        </button>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div>
              <div className='fw-bold' style={{ fontSize: 42 }}>Macaca Club</div>
              <div style={{ fontSize: 32 }}>by Macaca Club</div>
              <div className='d-flex mb-3 mt-3' style={{ gap: 30, fontSize: 28 }}>
                <i className="far fa-globe"></i>
                <i className="fab fa-discord"></i>
                <i className="fab fa-twitter"></i>
              </div>
              <div className='mb-4' style={{ width: 600 }}>Affine Transformations is an in-depth exploration of the abstract aesthetic beauty that exists within the realm of fractal mathematics. Created by combining iterated function systems..</div>
              <div className='mb-4'>
                {!this.isWalletConnected() ? (
                    <button className="btn btn-primary-gradient px-5 rounded-pill border-white fw-bold" style={{ transform: 'none', borderWidth: 4 }} disabled={!this.provider} onClick={() => this.connectWallet()}>
                      Connect Wallet
                    </button>
                  ) : (
                    <button className="btn btn-primary-gradient px-5 rounded-pill border-white fw-bold" style={{ transform: 'none', borderWidth: 4 }} disabled={this.state.loading || this.state.isPaused} onClick={() => this.mintTokens(1)}>
                      Mint
                    </button>
                  )
                }
                {this.state.loading && (
                  <span className='spinner-border ms-4'></span>
                )}
              </div>
              {this.state.errorMessage &&
                <div className="alert alert-danger">
                  <p>{this.state.errorMessage}</p>
                  <button className='btn btn-primary-gradient' onClick={() => this.setError()}>
                    <div className="content">Close</div>
                  </button>
                </div>
              }
            </div>
          </div>

          <div className='row row-cols-2 g-5 mb-5'>
            <div>
              <div className="fw-bold" style={{ fontSize: 48 }}>About</div>
              <div className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.</div>
              <div className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.</div>
              <div className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div>
              <div className='mint-tabs mb-3'>
                <div className={'item' + (this.state.activeTabs==='roadmap' ? ' active' : '')} onClick={() => this.setState({ activeTabs: 'roadmap' })}>Roadmap</div>
                <div className={'item' + (this.state.activeTabs==='team' ? ' active' : '')} onClick={() => this.setState({ activeTabs: 'team' })}>Team</div>
              </div>

              {this.state.activeTabs==='roadmap' && (
                <div>
                  {[0,1,2,3].map(i => (
                    <div className='mb-3' key={i}>
                      <div className='fw-bold mb-1'>Step {i+1}:</div>
                      <div>Elit proident aliquip proident et quis eu velit aliqua sint. Qui culpa et aliqua cupidatat aute ut. Labore ullamco amet proident in. Cupidatat tempor ad sit commodo. Esse enim duis adipisicing sunt dolor mollit voluptate ut.</div>
                    </div>
                  ))}
                </div>
              )}

              {this.state.activeTabs==='team' && (
                <div>
                  {[0,1,2,3].map(i => (
                    <div className='mb-3' key={i}>
                      <div className="fw-bold">Adam Mason</div>
                      <div className='mb-2'>CEO</div>
                      <div>Exercitation pariatur enim anim esse ipsum labore exercitation consectetur amet magna. In dolor laborum eu exercitation. Id ut exercitation in amet id ex. Proident est consequat officia ullamco ut proident laboris.</div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      </>
    );
  }

  private setError(error: any = null): void
  {
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
        this.setState({errorMessage: error});

        return;
      }
    }

    this.setState({
      errorMessage: null === errorMessage ? null : errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1),
    });
  }

  private generateContractUrl(): string
  {
    return this.state.networkConfig.blockExplorer.generateContractUrl(CollectionConfig.contractAddress!);
  }

  private generateMarketplaceUrl(): string
  {
    return CollectionConfig.marketplaceConfig.generateCollectionUrl(CollectionConfig.marketplaceIdentifier, !this.isNotMainnet());
  }

  private generateTransactionUrl(transactionHash: string): string
  {
    return this.state.networkConfig.blockExplorer.generateTransactionUrl(transactionHash);
  }

  private async connectWallet(): Promise<void>
  {
    try {
      await this.provider.provider.request!({ method: 'eth_requestAccounts' });

      this.initWallet();
    } catch (e) {
      this.setError(e);
    }
  }

  private async refreshContractState(): Promise<void>
  {
    this.setState({
      maxSupply: (await this.contract.maxSupply()).toNumber(),
      totalSupply: (await this.contract.totalSupply()).toNumber(),
      maxMintAmountPerTx: (await this.contract.maxMintAmountPerTx()).toNumber(),
      tokenPrice: await this.contract.cost(),
      isPaused: await this.contract.paused(),
      isWhitelistMintEnabled: await this.contract.whitelistMintEnabled(),
      isUserInWhitelist: Whitelist.contains(this.state.userAddress ?? ''),
    });
  }

  private async initWallet(): Promise<void>
  {
    const walletAccounts = await this.provider.listAccounts();

    this.setState(defaultState);

    if (walletAccounts.length === 0) {
      return;
    }

    const network = await this.provider.getNetwork();
    let networkConfig: NetworkConfigInterface;

    if (network.chainId === CollectionConfig.mainnet.chainId) {
      networkConfig = CollectionConfig.mainnet;
    } else if (network.chainId === CollectionConfig.testnet.chainId) {
      networkConfig = CollectionConfig.testnet;
    } else {
      this.setError('Unsupported network!');

      return;
    }

    this.setState({
      userAddress: walletAccounts[0],
      network,
      networkConfig,
    });

    if (await this.provider.getCode(CollectionConfig.contractAddress!) === '0x') {
      this.setError('Could not find the contract, are you connected to the right chain?');

      return;
    }

    this.contract = new ethers.Contract(
      CollectionConfig.contractAddress!,
      ContractAbi,
      this.provider.getSigner(),
    ) as NftContractType;

    this.refreshContractState();
  }

  private registerWalletEvents(browserProvider: ExternalProvider): void
  {
    // @ts-ignore
    browserProvider.on('accountsChanged', () => {
      this.initWallet();
    });

    // @ts-ignore
    browserProvider.on('chainChanged', () => {
      window.location.reload();
    });
  }
}
