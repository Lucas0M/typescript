import { useState } from "react";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
};

function Carrinho() {
  const [produtos, setProduto] = useState<Produto[]>([
    {
      id: 1,
      nome: "Teclado",
      preco: 150,
      quantidade: 1,
    },
    {
      id: 2,
      nome: "Mouse",
      preco: 80,
      quantidade: 1,
    },
  ]);

  function aumentarQuantidade(produtoId: number) {
    const newProdutos = produtos.map((produto) => {
      return produto.id === produtoId
        ? { ...produto, quantidade: produto.quantidade + 1 }
        : produto;
    });
    return setProduto(newProdutos);
  }

  function diminuirQuantidade(produtoId: number) {
    const newProdutos = produtos.map((produto) => {
      return produto.id === produtoId && produto.quantidade > 1
        ? { ...produto, quantidade: produto.quantidade - 1 }
        : produto;
    });
    return setProduto(newProdutos);
  }

  function removerProduto(produtoId: number) {
    const newProdutos = produtos.filter((produto) => produto.id !== produtoId);
    setProduto(newProdutos);
  }

  function adicionarHeadset() {
    const exists = produtos.some((produto) => produto.nome === "Headset");
    if (!exists) {
      setProduto([
        ...produtos,
        {
          id: produtos.length + 1,
          nome: "Headset",
          preco: 200,
          quantidade: 1,
        },
      ]);
    }
    return produtos;
  }

  function precoTotal() {
    let soma: number = 0;
    produtos.forEach((produto) => {
      soma += produto.preco * produto.quantidade;
    });
    return soma;
  }

  return (
    <div>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>
            Produto [{produto.id}]: {produto.quantidade} {produto.nome} R$
            {produto.preco}
            <button onClick={() => aumentarQuantidade(produto.id)}>[+]</button>
            <button onClick={() => diminuirQuantidade(produto.id)}>[-]</button>
            <button onClick={() => removerProduto(produto.id)}>Remover</button>
          </p>
        </div>
      ))}
      <button onClick={adicionarHeadset}>Adicionar Headset</button>
      <p>Total: {precoTotal()}</p>
    </div>
  );
}

export default Carrinho;
