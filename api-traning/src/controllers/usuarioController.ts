import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";
import {
  atualizarUsuarioSchema,
  criarUsuarioSchema,
} from "../schemas/usuarioSchema";

export async function listarUsuarios(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    next(error);
  }
}

export async function buscarUsuario(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id: number = Number(req.params.id);
    const usuario = await prisma.usuario.findUnique({ where: { id } });

    if (!usuario) {
      return res.status(404).json({ erro: "Erro user not found!" });
    }
    res.json(usuario);
  } catch (error) {
    next(error);
  }
}

export async function criarUsuario(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const resultado = criarUsuarioSchema.safeParse(req.body);

    if (!resultado.success) {
      return res
        .status(400)
        .json({ erro: resultado.error.flatten().fieldErrors });
    }

    const { nome, email } = resultado.data;

    if (!nome || !email) {
      return res.status(400).json({ erro: "Not enough data!" });
    }

    const newUsuario = await prisma.usuario.create({
      data: { nome, email },
    });

    res.status(201).json(newUsuario);
  } catch (error) {
    next(error);
  }
}

export async function atualizarUsuario(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id: number = Number(req.params.id);

    const resultado = atualizarUsuarioSchema.safeParse(req.body);

    if (!resultado.success) {
      return res
        .status(400)
        .json({ erro: resultado.error.flatten().fieldErrors });
    }

    const { nome, email } = resultado.data;

    const usuario = await prisma.usuario.update({
      where: { id },
      data: { nome, email },
    });

    res.json(usuario);
  } catch (error) {
    next(error);
  }
}

export async function deletarUsuario(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id: number = Number(req.params.id);

    await prisma.usuario.delete({ where: { id } });

    res.json({ message: "User deleted sucessfully!" });
  } catch (error) {
    next(error);
  }
}
