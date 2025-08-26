// filepath: /F:/Programação/DoceEncanto/doce-encanto/src/context/ModalContext.tsx
'use client';
import { Produto } from '@/app/interface/Produtos';
import { createContext, useState, ReactNode } from 'react';

interface ModalContextProps {
  isOpen: boolean;
  openModal: (produto: Produto) => void;
  closeModal: () => void;
  selectedProduto: Produto | null;
  setSelectedProduto: (produto: Produto | null) => void;
}

const defaultValue: ModalContextProps = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  selectedProduto: null,
  setSelectedProduto: () => {},
};

export const ModalContext = createContext<ModalContextProps>(defaultValue);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduto, setSelectedProduto] = useState<Produto | null>(null);

  const openModal = (produto: Produto) => {
    console.log('Produto selecionado:', produto); // Adicione o console.log aqui
    setIsOpen(true);
    setSelectedProduto(produto);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduto(null);
  };

  const values = {
    isOpen,
    openModal,
    closeModal,
    selectedProduto,
    setSelectedProduto,
  };

  return (
    <ModalContext.Provider value={values}>
      {children}
    </ModalContext.Provider>
  );
};