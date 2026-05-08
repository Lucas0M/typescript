export enum StatusTarefa {
  Pendente = "Pendente",
  EmAndamento = "EmAndamento",
  Concluida = "Concluida",
}

export interface Tarefa {
  id: number,
  titulo: string,
  descricao?: string,
  status: StatusTarefa,
  usuarioId: number
}