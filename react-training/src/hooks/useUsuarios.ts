import { useEffect, useState } from "react";

type Usuario = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
};

function useUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseJSON: Usuario[] = await response.json();

    setLoading(false);
    setUsuarios(responseJSON);
  }

  return { usuarios, loading };
}

export default useUsuarios;
