import { StatusTarefa, type Tarefa, type Usuario } from "../models";


export function gerarRelatorio(usuario: Usuario | null, tarefas: Tarefa[]): string {
  if(!usuario) throw new Error("Usuario nao encontrado")

  const concluidas = tarefas.filter(tarefa => tarefa.status == StatusTarefa.Concluida)
  const emAndamento = tarefas.filter(tarefa => tarefa.status == StatusTarefa.EmAndamento)
  const pendente = tarefas.filter(tarefa => tarefa.status == StatusTarefa.Pendente)

  const formatar = (lista: Tarefa[]) => 
    lista.length > 0
    ? lista.map(tarefa => `${tarefa.titulo}`).join(", ")
    : "Nenhuma"

  return `
====================
Usuario: ${usuario.nome} (${usuario.email})
Total de tarefas: ${tarefas.length}
✅Concluidas: ${formatar(concluidas)}
➡️ EmAndamento: ${formatar(emAndamento)}
⚠️ Pendentes: ${formatar(pendente)}
=====================
  `
}