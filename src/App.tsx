import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from 'react'
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen]= useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true)
    }

    function handleClosenNewTransactionModal() {
        setIsNewTransactionModalOpen(false)        
  }
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleClosenNewTransactionModal} />
    </>
  );
}


