import { useContext } from "react";
import { CarrinhoContext } from "../contexts/CarrinhoContext";

function CarrinhoNovo() {
  const contexto = useContext(CarrinhoContext);

  return (
    <div>
      <h1>Carrinho</h1>
      {contexto?.itens.map((item) => (
        <div key={item.id}>
          <p>Nome: {item.nome}</p>
          <p>Preco: {item.preco}</p>
          <button onClick={() => contexto?.removerItem(item.id)}>
            Remover Produto do Carrinho
          </button>
        </div>
      ))}
      <p>Total: {contexto?.total()}</p>
    </div>
  );
}

export default CarrinhoNovo;
