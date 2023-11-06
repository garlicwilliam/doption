import { UniversalProviderOpts } from '@walletconnect/universal-provider';
import { AppName, getAppName } from '../util/app';
import { NET_ETHEREUM, NET_GOERLI, NET_BNB, NET_BNB_TEST, NET_ARBITRUM, NET_ARBITRUM_GOERLI } from './network';
import { ConnectParams } from '@walletconnect/universal-provider/dist/types/types';

const IS_TEST_ENV = true;

export const RpcMethod = []; //['eth_sendTransaction', 'eth_accounts', 'eth_requestAccounts'];
export const RpcEvent = []; //['accountsChanged', 'chainChanged', 'message', 'disconnect', 'connect'];
export const enum WcNetNamespace {
  eip155 = 'eip155',
}
export const WcChainId = {
  Ethereum: WcNetNamespace.eip155 + ':' + NET_ETHEREUM,
  Goerli: WcNetNamespace.eip155 + ':' + NET_GOERLI,
  Bnb: WcNetNamespace.eip155 + ':' + NET_BNB,
  BnbTest: WcNetNamespace.eip155 + ':' + NET_BNB_TEST,
  Arbitrum: WcNetNamespace.eip155 + ':' + NET_ARBITRUM,
  ArbitrumGoerli: WcNetNamespace.eip155 + ':' + NET_ARBITRUM_GOERLI,
};

export function wcProviderInitOps(): UniversalProviderOpts {
  const appName: AppName = getAppName();

  return appName === AppName.Stone
    ? {
        projectId: '9155bc0988aa999a5bdf4069c4d050e7',
        metadata: {
          name: 'StakeStone',
          description: 'Stake, But More',
          url: 'https://stakestone.io',
          icons: [],
        },
        logger: 'error',
      }
    : {
        projectId: '4473e1279621240809d6ecaf56415dbb',
        metadata: {
          name: 'ShieldOption',
          url: 'https://shieldex.io',
          description: '',
          icons: [],
        },
      };
}

export function wcDefaultChain(): string {
  const appName: AppName = getAppName();

  switch (appName) {
    case AppName.Stone: {
      return IS_TEST_ENV ? WcChainId.Goerli : WcChainId.Ethereum;
    }
    default: {
      return WcChainId.Goerli;
    }
  }
}

export function wcConnectOps(): ConnectParams {
  const appName: AppName = getAppName();

  switch (appName) {
    case AppName.Stone: {
      return {
        namespaces: {
          eip155: {
            chains: IS_TEST_ENV ? [WcChainId.Goerli] : [WcChainId.Ethereum],
            defaultChain: wcDefaultChain(),
            methods: RpcMethod,
            events: RpcEvent,
            rpcMap: {
              [WcChainId.BnbTest]: 'https://data-seed-prebsc-2-s2.binance.org:8545',
            },
          },
        },
        optionalNamespaces: {
          eip155: {
            chains: IS_TEST_ENV
              ? [WcChainId.Goerli, WcChainId.BnbTest, WcChainId.ArbitrumGoerli]
              : [WcChainId.Ethereum, WcChainId.Bnb, WcChainId.Arbitrum],
            defaultChain: wcDefaultChain(),
            methods: RpcMethod,
            events: RpcEvent,
            rpcMap: {
              [WcChainId.BnbTest]: 'https://data-seed-prebsc-2-s2.binance.org:8545',
            },
          },
        },
      };
    }
    default: {
      return {
        namespaces: {
          eip155: {
            chains: [WcChainId.Goerli],
            defaultChain: WcChainId.Goerli,
            methods: [],
            events: [],
          },
        },
      };
    }
  }
}
