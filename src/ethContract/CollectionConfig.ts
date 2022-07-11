import CollectionConfigInterface from '../interfaces/CollectionConfigInterface';
import * as Networks from './Networks';
import * as Marketplaces from './Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MacacaNFT',
  tokenName: 'Macaca Clubs',
  tokenSymbol: 'MCC',
  hiddenMetadataUri: 'ipfs://Qmcddj7CxJTXCCHRof5cipGSfDroRGADEYM9jc8AD6To7o/hidden.json',
  maxSupply: 20,
  whitelistSale: {
    price: 0.005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.007,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.009,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0x7d43134E33A73E1412e030698319C4F3cfF8Fa29',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
