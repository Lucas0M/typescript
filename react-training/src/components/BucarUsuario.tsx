import { useEffect, useState } from "react";

type Usuario = {
  name: string;
  email: string;
  id: number;
};

function BuscarUsuario() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((dados) => {
        setUsuario(dados);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <p>Nome: {usuario?.name}</p>
      <p>Email: {usuario?.email}</p>
      <button onClick={() => setUserId(userId - 1)}>Voltar usuario</button>
      <button onClick={() => setUserId(userId + 1)}>Proximo usuario</button>
    </div>
  );
}

export default BuscarUsuario;
