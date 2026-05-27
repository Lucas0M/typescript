import { useState } from "react";
import { CarrinhoContext, type Produto } from "./CarrinhoContext";

export function CarrinhoProvider({ children }: { children: React.ReactNode }) {
  const [itens, setItens] = useState<Produto[]>([]);

  function adicionarItem(produtos: Produto[], id: number) {
    const produto: Produto | undefined = produtos.find(
      (item) => item.id === id,
    );
    if (produto) setItens([...itens, produto]);
  }

  function removerItem(id: number) {
    const newItens: Produto[] | undefined = itens.filter(
      (item) => item.id !== id,
    );
    setItens(newItens);
  }

  function total() {
    let soma: number = 0;
    itens.forEach((item) => {
      soma += item.preco;
    });
    return soma;
  }

  return (
    <CarrinhoContext.Provider
      value={{ itens, adicionarItem, removerItem, total }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
