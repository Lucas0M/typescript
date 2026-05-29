import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes";
import { logger } from "./middlewares/logger";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(logger);
app.use("/usuarios", usuarioRoutes);
app.use(errorHandler);

export default app;
