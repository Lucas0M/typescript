import { createContext } from "react";

export type Tarefa = {
  id: number;
  titulo: string;
  concluida: boolean;
};

type TarefasTypeContext = {
  tarefas: Tarefa[];
  adicionarTarefa: (titulo: string) => void;
  removerTarefa: (id: number) => void;
  toggleTarefa: (id: number) => void;
};

export const TarefasContext = createContext<TarefasTypeContext | null>(null);
