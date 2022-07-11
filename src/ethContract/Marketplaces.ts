import MarketplaceConfigInterface from '../interfaces/MarketplaceConfigInterface';

export const openSea: MarketplaceConfigInterface = {
  name: 'OpenSea',
  generateCollectionUrl: (marketplaceIdentifier: string, isMainnet: boolean) => 'https://' + (isMainnet ? 'www' : 'testnets') + '.opensea.io/collection/' + marketplaceIdentifier,
}
