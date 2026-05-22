import { useState } from 'react';

type Usuario = {
  nome: string,
  email: string,
  idade: number
}

function Perfil(){
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "Lucas",
    email: "lucas@gmail.com",
    idade: 20
  })

  function fazerAniversario(){
    setUsuario({
      ...usuario,
      idade: usuario.idade + 1
    })
  }

  function changeEmail(){
    setUsuario({
      ...usuario,
      email: "lucasnovo@gmail.com"
    })
  }

  return (
    <div>
      <h2>Nome do Individuo: {usuario.nome}</h2>
      <h2>Email do Individuo: {usuario.email}</h2>
      <h2>Idade do Individuo: {usuario.idade}</h2>

      <button onClick={fazerAniversario}>Fazer Aniversario</button>
      <button onClick={changeEmail}>Mudar Email</button>
    </div>
  )
}

export default Perfil