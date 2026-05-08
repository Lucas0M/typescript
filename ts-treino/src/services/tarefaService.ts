import { StatusTarefa, Tarefa } from "../models";

export const tarefas: Tarefa[] = []
export let proximoIdTarefa: number = 1

export function criarTarefa(dados: Omit<Tarefa, "id" | "status">): Tarefa {
  const tarefa: Tarefa | null = { id: proximoIdTarefa++, ...dados, status: StatusTarefa.Pendente }
  tarefas.push(tarefa)
  return tarefa
}

export function buscarTarefaPorId(id: number): Tarefa | null {
  return tarefas.find(tarefa => tarefa.id === id) ?? null
}

export function alterarStatus(id: number, status: StatusTarefa): string {
  const tarefa: Tarefa | null = buscarTarefaPorId(id)
  if (!tarefa) return "Tarefa nao encontrada!";
  tarefa.status = status
  return "Status alterado com sucesso!"
}

export function listarTarefasPorUsuario(usuarioId: number): Tarefa[] {
  return tarefas.filter(tarefa => tarefa.usuarioId === usuarioId)
}