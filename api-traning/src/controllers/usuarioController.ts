import { Request, Response } from "express";
import prisma from "../prisma";

export async function listarUsuarios(req: Request, res: Response) {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
}

export async function buscarUsuario(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  const usuario = await prisma.usuario.findUnique({ where: { id } });

  if (!usuario) {
    return res.status(404).json({ erro: "Erro user not found!" });
  }
  res.json(usuario);
}

export async function criarUsuario(req: Request, res: Response) {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: "Not enough data!" });
  }

  const newUsuario = await prisma.usuario.create({
    data: { nome, email },
  });

  res.status(201).json(newUsuario);
}

export async function atualizarUsuario(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  const { nome, email } = req.body;

  const usuario = await prisma.usuario.update({
    where: { id },
    data: { nome, email },
  });

  res.json(usuario);
}

export async function deletarUsuario(req: Request, res: Response) {
  const id: number = Number(req.params.id);

  await prisma.usuario.delete({ where: { id } });

  res.json({ message: "User deleted sucessfully!" });
}
