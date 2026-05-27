import { useContext } from "react";
import { TarefasContext } from "../contexts/TarefasContext";

function ListaTarefas() {
  const contexto = useContext(TarefasContext);

  return (
    <div>
      {contexto?.tarefas.map((tarefa) => (
        <div key={tarefa.id}>
          <p>Titulo: {tarefa.titulo}</p>
          <p style={{ color: tarefa.concluida ? "green" : "red" }}>
            Concluida: {tarefa.concluida ? "concluida" : "nao concluida"}
          </p>
          <button onClick={() => contexto?.toggleTarefa(tarefa.id)}>
            Concluir
          </button>
          <button onClick={() => contexto?.removerTarefa(tarefa.id)}>
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListaTarefas;
