type Perfil = "admin" | "editor" | "visitante"

type Permissao = "ler" | "escrever" | "deletar" | "gerenciar"

interface ConfigPerfil {
  permissoes: Permissao[];
  descricao: string;
}

type Painel = Record<Perfil, ConfigPerfil>

const painelPermissao: Painel = {
  admin: {
    permissoes: ["ler", "gerenciar", "escrever", "deletar"],
    descricao: "Esta autenticado como ADMIN",
  },
  editor: {
    permissoes: ["ler", "escrever"],
    descricao: "Esta autenticado como EDITOR",
  },
  visitante: {
    permissoes: ["ler"],
    descricao: "Esta autenticado como VISITANTE",
  }
}

function temPermissao(perfil: Perfil, permissao: Permissao): boolean {
  const autenticado = painelPermissao[perfil]
  return autenticado.permissoes.includes(permissao) 
}

function resumoPerfil(perfil: Perfil): string {
  const profile = painelPermissao[perfil]
  return `${perfil} | ${profile.descricao} - Perms: ${profile.permissoes.join(", ")} `
}

console.log(resumoPerfil("visitante"))
console.log(resumoPerfil("editor"))
console.log(resumoPerfil("admin"))
console.log("---------------------")
console.log(temPermissao("visitante", "escrever"))
console.log(temPermissao("admin", "ler"))
console.log(temPermissao("editor", "gerenciar"))