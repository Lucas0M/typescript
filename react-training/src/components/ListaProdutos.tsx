import { useContext } from "react";
import { CarrinhoContext } from "../contexts/CarrinhoContext";

function ListaProdutos() {
  const contexto = useContext(CarrinhoContext);

  const produtos = [
    { id: 1, nome: "Teclado", preco: 150 },
    { id: 2, nome: "Mouse", preco: 80 },
    { id: 3, nome: "Headset", preco: 200 },
  ];

  return (
    <div>
      <h1>Lista - Produtos</h1>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>Nome: {produto.nome}</p>
          <button onClick={() => contexto?.adicionarItem(produtos, produto.id)}>
            Adicionar Produto ao Carrinho
          </button>
          <p>Preco: {produto.preco}</p>
        </div>
      ))}
    </div>
  );
}

export default ListaProdutos;
