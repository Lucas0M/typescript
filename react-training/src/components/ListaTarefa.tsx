import { useState } from "react"

type Tarefa = {
  id: number,
  descricao: string,
  concluida: boolean
}

function ListaTarefa(){
  const [tarefas, setTarefa] = useState<Tarefa[]>([{
    id : 1,
    descricao: "tarefa 1",
    concluida: false
  }, {
    id: 2,
    descricao: "tarefa 2",
    concluida: true
  }])

  function addTarefa(){
    const novaTarefa: Tarefa = {
      id: tarefas.length + 1,
      descricao: `Tarefa ${tarefas.length + 1}`,
      concluida: false
    }
    setTarefa([...tarefas, novaTarefa])
  }

  function concluir(){
    setTarefa(tarefas.map((tarefa, index) => 
      index === 0 ? {...tarefa, concluida: true} : tarefa
    ))
  }

  return (
    <div>
      {tarefas.map(tarefa => (
        <div key={tarefa.id}>
          <p>{tarefa.descricao}</p>
          <p>{tarefa.concluida ? "Concluida" : "Pendente"}</p>
        </div>
      ))}
      <button onClick={addTarefa}>Adicionar Tarefa</button>
      <button onClick={concluir}>Concluir primeira</button>
    </div>
  )

}

export default ListaTarefa