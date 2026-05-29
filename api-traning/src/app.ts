import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes";
import { logger } from "./middlewares/logger";

const app = express();

app.use(express.json());
app.use(logger);
app.use("/usuarios", usuarioRoutes);

export default app;
