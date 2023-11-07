import { SldDecimal, SldDecPercent } from '../../../util/decimal';
import { IndexUnderlyingType } from './assets';
import { NET_BNB, NET_BNB_TEST, NET_GOERLI } from '../../../constant/network';

export const SLIPPAGE = {
  A: SldDecPercent.genPercent('0.5'),
  B: SldDecPercent.genPercent('1'),
  C: SldDecPercent.genPercent('3'),
};

export const DEFAULT_SLIPPAGE = SLIPPAGE.A;
export const DEFAULT_DEADLINE = SldDecimal.fromNumeric('20', 0);

// ---------------------------------------------------------------------------------------------------------------------

export const SUPPORT_NETWORK = NET_BNB;

const PAIR_CONFIG = {
  [NET_GOERLI]: {
    indexUnderlying: IndexUnderlyingType.BTC,
    quoteToken: {
      symbol: 'POT',
      address: '0x08B524a8Ff5eAfD618CC8563D4A74f19e54A9715',
      decimal: 18,
      network: NET_GOERLI,
    },
  },
  [NET_BNB]: {
    indexUnderlying: IndexUnderlyingType.BTC,
    quoteToken: {
      symbol: 'DOP',
      address: '0xb9c01F9160003CDB05689B47C001667D381760f9',
      decimal: 18,
      network: NET_BNB,
    },
  },
};
const GRAPH_CONFIG = {
  [NET_GOERLI]: 'https://api.thegraph.com/subgraphs/name/garlicwilliam/shield-history-goerli-v5',
  [NET_BNB]: 'https://api.thegraph.com/subgraphs/name/garlicwilliam/doption-history-bsc',
  [NET_BNB_TEST]: '',
};

export const DEFAULT_TRADE_PAIR = PAIR_CONFIG[SUPPORT_NETWORK];
export const SUB_GRAPH_API = GRAPH_CONFIG[SUPPORT_NETWORK];
