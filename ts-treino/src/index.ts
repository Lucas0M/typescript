import { StatusTarefa } from "./models";
import { alterarStatus, criarTarefa, listarTarefasPorUsuario } from "./services/tarefaService";
import { buscarUsuarioPorId, cadastrarUsuario } from "./services/usuarioService";
import { gerarRelatorio } from "./utils/formatador";

const id: number = 1

cadastrarUsuario({nome: "Lucas", email: "lucas@gmail.com"})
cadastrarUsuario({nome: "Pedro", email: "pedro@gmail.com"})

criarTarefa({titulo: "Tirar o lixo", usuarioId: 1, descricao: "Nao tem urgencia"})
criarTarefa({titulo: "Lavar a louca", usuarioId: 1, descricao: "Pra hoje"})
criarTarefa({titulo: "Cortar a grama", usuarioId: 2, descricao: "Mandar o Pedro fazer"})
criarTarefa({titulo: "Lavar a calcada", usuarioId: 2})

alterarStatus(2, StatusTarefa.Concluida)

console.log(gerarRelatorio(buscarUsuarioPorId(id), listarTarefasPorUsuario(id)))