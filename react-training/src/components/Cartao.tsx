type CartaoProps = {
  nome: string,
  curso: string,
  idade?: number
  turno?: "manha" | "tarde" | "noite"
}

function Cartao({ nome, curso, idade=18, turno }: CartaoProps) {
  return (
    <div>
      <h2>Nome: {nome}</h2>
      <p>Curso: {curso}</p>
      {idade !== undefined && <p>Idade: {idade}</p>}
      {turno && <p>Turno: {turno}</p>}
    </div>
  )
}

export default Cartao