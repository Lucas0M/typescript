import type { Usuario } from "../models";

export const usuarios: Usuario[] = []
export let proximoId: number = 1

export function cadastrarUsuario(dados: Omit<Usuario, "id">): Usuario {
  const usuario: Usuario = { id: proximoId++, ...dados}
  usuarios.push(usuario)

  return usuario
}

export function buscarUsuarioPorId(id: number): Usuario | null {
  return usuarios.find(usuario => usuario.id === id) ?? null
}