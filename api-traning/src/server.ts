import express from "express";

const app = express();

app.use(express.json());

const usuarios = [
  { id: 1, nome: "Lucas", email: "lucas@gmail.com" },
  { id: 2, nome: "Maria", email: "maria@gmail.com" },
  { id: 3, nome: "Pedro", email: "pedro@gmail.com" },
];

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);
  const usuario = usuarios.find((user) => user.id === id);

  if (!usuario) {
    res.status(404).json({ erro: "User not found!" });
    return;
  }

  res.json(usuario);
});

app.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;
  const newUser = { id: usuarios.length + 1, nome, email };

  usuarios.push(newUser);
  res.status(201).json(newUser);
});

app.put("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = usuarios.findIndex((u) => u.id === id);

  if (index === -1) {
    res.status(404).json({ erro: "User not found!" });
    return;
  }

  const { nome, email } = req.body;
  usuarios[index] = { ...usuarios[index], nome, email };
  res.json(usuarios[index]);
});

app.delete("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = usuarios.findIndex((u) => u.id === id);

  if (index === -1) {
    res.status(404).json({ erro: "User not found!" });
    return;
  }

  usuarios.splice(index, 1);
  res.json({ mensagem: "Removed user!" });
});

app.listen(3000, () => {
  console.log("Server on na port: 3000");
});
