import { z } from "zod";

export const criarUsuarioSchema = z.object({
  nome: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email!"),
});

export const atualizarUsuarioSchema = z.object({
  nome: z.string().min(2, "Name must be at least 2 characters").optional(),
  email: z.string().email("Invalid email!").optional(),
});
