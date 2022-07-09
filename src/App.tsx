import React, { useMemo } from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import AuthLogin from './components/AuthLogin';
import AuthRegister from './components/AuthRegister';
import './styles/styles.scss';
import AboutPage from './views/AboutPage';
import AuthPage from './views/AuthPage';
import HomePage from './views/HomePage';
import MintPage from './views/MintPage';
import NftPage from './views/NftPage';
import PastPage from './views/PastPage';
import UpcomingPage from './views/UpcomingPage';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
import { PhantomWalletAdapter, SolflareWalletAdapter, SolletExtensionWalletAdapter, SolletWalletAdapter } from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import * as anchor from '@project-serum/anchor';
import { DEFAULT_TIMEOUT } from './candyMachine/connection';
import { ToastContainer } from 'react-toastify';
import AuthPasswordForget from 'components/AuthPasswordForget';

function App() {
  const solNetwork = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new SolletExtensionWalletAdapter(),
      new SolletWalletAdapter(),
    ],
    []
  );  

  const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
    try {
      const candyMachineId = new anchor.web3.PublicKey(
        process.env.REACT_APP_CANDY_MACHINE_ID!,
      );
  
      return candyMachineId;
    } catch (e) {
      console.log('Failed to construct CandyMachineId', e);
      return undefined;
    }
  };
  
  const candyMachineId = getCandyMachineId();
  const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
  const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
  const connection = new anchor.web3.Connection(
    rpcHost ? rpcHost : anchor.web3.clusterApiUrl('devnet'),
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <Router>
            <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
              <ToastContainer />
              <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='upcoming' element={<UpcomingPage/>}></Route>
                <Route path='past' element={<PastPage/>}></Route>
                <Route path='nft' element={<NftPage/>}></Route>
                <Route path='mint' element={
                  <MintPage
                    candyMachineId={candyMachineId}
                    network={network}
                    connection={connection}
                    rpcHost={rpcHost}
                    txTimeout={DEFAULT_TIMEOUT}
                  />
                }></Route>
                <Route path='about' element={<AboutPage/>}></Route>

                <Route path='auth' element={<AuthPage/>}>
                  <Route path="" element={<Navigate to={'login'} replace/>}/>
                  <Route path='login' element={<AuthLogin/>}/>
                  <Route path='register' element={<AuthRegister/>}/>
                  <Route path='forget' element={<AuthPasswordForget/>}/>
                </Route>
              </Routes>
            </div>
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
