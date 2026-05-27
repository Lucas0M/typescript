import { createContext } from "react";

export type Produto = {
  id: number;
  nome: string;
  preco: number;
};

type CarrinhoTypeContext = {
  itens: Produto[];
  adicionarItem: (produtos: Produto[], id: number) => void;
  removerItem: (id: number) => void;
  total: () => number;
};

export const CarrinhoContext = createContext<CarrinhoTypeContext | null>(null);
