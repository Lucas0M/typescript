import { Router } from "express";
import { auth } from "../middlewares/auth";

import {
  listarUsuarios,
  buscarUsuario,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
} from "../controllers/usuarioController";

const router = Router();

router.get("/", listarUsuarios);
router.get("/:id", buscarUsuario);
router.post("/", auth, criarUsuario);
router.put("/:id", auth, atualizarUsuario);
router.delete("/:id", auth, deletarUsuario);

export default router;
