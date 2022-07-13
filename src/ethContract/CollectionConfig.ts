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
  contractName: 'MythOfAshaNFT',
  tokenName: 'Myth of Asha',
  tokenSymbol: 'MOA',
  hiddenMetadataUri: 'ipfs://QmXSAXvavRNHwcLrUwCm3aMQZG3psPt51s9qzhML6bFCKt/hidden.json',
  maxSupply: 28,
  whitelistSale: {
    price: 0.005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.007,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.01,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0x709Cf4DC3e444C8Feef2Af3ECD506c731Ca12ba1',
  marketplaceIdentifier: 'myth-of-asha',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
