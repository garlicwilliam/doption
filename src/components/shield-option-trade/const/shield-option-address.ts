import { NET_BNB, NET_GOERLI } from '../../../constant/network';
import { NetworkConfPartialMap } from '../../../constant/network-type';

export const SHIELD_OPTION_TRADE_CONFIG_KEYS = [
  'ethOracle',
  'btcOracle',
  'optionTrade',
  'liquidityManager',
  'liquidityFactory',
  'underlyingETH',
  'underlyingBTC',
  'broker',
] as const;

export type ShieldOptionTradeConfigField = typeof SHIELD_OPTION_TRADE_CONFIG_KEYS[number];
export type ShieldOptionTradeConfigAddress = { [k in ShieldOptionTradeConfigField]: string };
export type ShieldOptionTradeConfigAbi = { [k in ShieldOptionTradeConfigField]: any[] };

export const SHIELD_OPTION_TRADE_ADDRESS: NetworkConfPartialMap<ShieldOptionTradeConfigAddress> = {
  [NET_GOERLI]: {
    ethOracle: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
    btcOracle: '0xA39434A63A52E749F02807ae27335515BA4b07F7',
    optionTrade: '0xbAd413E3B2699B637861d04c7DA61e2ec72f27bf',
    liquidityManager: '0xb9452A85B1e041003b069e7b4bA4C3150a015Cb2',
    liquidityFactory: '0xff9B42e4a24484DeBd839EfbE8Db0aC97Cd6818b',
    underlyingETH: '0xF40954eA9ca79535E370f1eda5fE653Cb17e9fb7',
    underlyingBTC: '0x6B3A9e233D50eA58693C8D6Dc6d518ad2e4Bcd3B',
    broker: '0x97573fDa4C46e02d3610Bd2B8ED26f9E6afD7B7a',
  },
  [NET_BNB]: {
    ethOracle: '0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e',
    btcOracle: '0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf',
    optionTrade: '0xB5E36423dC50fAFc389e776EFe7B4e3F6b9b042d',
    liquidityManager: '0xE568164Ad3ee023e7122BD33026Cb1db333bb1A2',
    liquidityFactory: '0x2BBdc48C1607151fF74a2A1A472d05cE1D068864',
    underlyingETH: '0xbC82BC9Bf9716aaa8A4768D15593F56B3b1923b2',
    underlyingBTC: '0x9153A2Aa3f6e2f54416150102B30240364205686',
    broker: '0x8Ce3Ad9238a7533B6286C294a4B5B2be9767b416',
  },
};
