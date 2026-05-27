import useUsuarios from "../hooks/useUsuarios";

function ListaUsuarios() {
  const { usuarios, loading } = useUsuarios();

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <p>Nome: {usuario.name}</p>
          <p>id: {usuario.id}</p>
          <p>email: {usuario.email}</p>
          <p>Username: {usuario.username}</p>
          <p>--------------------------------</p>
        </div>
      ))}
    </div>
  );
}

export default ListaUsuarios;
