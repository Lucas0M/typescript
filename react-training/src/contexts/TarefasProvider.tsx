import { useState } from "react";
import { TarefasContext, type Tarefa } from "./TarefasContext";

export function TarefasProvider({ children }: { children: React.ReactNode }) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  function adicionarTarefa(titulo: string) {
    if (titulo.trim() === "") return;
    const newTarefa: Tarefa = {
      id: tarefas.length + 1,
      titulo,
      concluida: false,
    };
    setTarefas([...tarefas, newTarefa]);
  }
  function removerTarefa(id: number) {
    const newLista = tarefas.filter((item) => item.id !== id);
    setTarefas(newLista);
  }
  function toggleTarefa(id: number) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
      ),
    );
  }

  return (
    <TarefasContext
      value={{ tarefas, adicionarTarefa, removerTarefa, toggleTarefa }}
    >
      {children}
    </TarefasContext>
  );
}
