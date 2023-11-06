import { IndexUnderlyingType } from './assets';

export const eth = 'https://static.doption.net/tokens/eth1.svg';
export const btc = 'https://static.doption.net/tokens/btc1.svg';

export const tokenIconConfigFile = 'https://static.doption.net/token-icon.json';

export const iconSizeTiny = 20;
export const iconSize = 24;
export const iconSizeBig = 30;

export const iconFontSizeTiny = 14;
export const iconFontSize = 16;
export const iconFontSizeBig = 18;

export const IndexUnderlyingAssetsIcon: { [k in IndexUnderlyingType]: string } = {
  [IndexUnderlyingType.ETH]: eth,
  [IndexUnderlyingType.BTC]: btc,
};
