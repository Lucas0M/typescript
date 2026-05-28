import { Request, Response } from "express";

type Usuario = {
  id: number;
  nome: string;
  email: string;
};

const usuarios: Usuario[] = [
  {
    id: 1,
    nome: "Lucas Ronaldo",
    email: "lucas@gmail.com",
  },
  {
    id: 2,
    nome: "Joao Marcos",
    email: "joao@gmail.com",
  },
  {
    id: 3,
    nome: "Pedro Silva",
    email: "pedro@gmail.com",
  },
];

export function listarUsuarios(req: Request, res: Response) {
  res.json(usuarios);
}

export function buscarUsuario(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: "Erro user not found!" });
  }
  res.json(usuario);
}

export function criarUsuario(req: Request, res: Response) {
  const { nome, email }: Omit<Usuario, "id"> = req.body;
  if (!nome || !email) {
    return res.status(400).json({ erro: "Not enough data!" });
  }
  const newUsuario: Usuario = { id: usuarios.length + 1, nome, email };
  usuarios.push(newUsuario);

  res.status(201).json(newUsuario);
}

export function atualizarUsuario(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  const { nome, email }: Omit<Usuario, "id"> = req.body;
  const index = usuarios.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "User not found!" });
  }

  usuarios[index] = { ...usuarios[index], nome, email };
  res.json(usuarios[index]);
}

export function deletarUsuario(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  const index: number = usuarios.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "User not found!" });
  }

  usuarios.splice(index, 1);
  return res.json({ message: "User deleted sucessed!" });
}
