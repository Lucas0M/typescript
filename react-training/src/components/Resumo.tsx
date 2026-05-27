import { useContext } from "react";
import { TarefasContext } from "../contexts/TarefasContext";

function Resumo() {
  const contexto = useContext(TarefasContext);

  const total = contexto?.tarefas.length || 0;
  const concluida = contexto?.tarefas.filter((t) => t.concluida).length || 0;
  const pendente = total - concluida;

  return (
    <div>
      <p>Total: {total}</p>
      <p>Concluídas: {concluida}</p>
      <p>Pendentes: {pendente}</p>
    </div>
  );
}

export default Resumo;
