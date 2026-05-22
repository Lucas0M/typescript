import { useState } from "react"

function Contador(){
  const [numero, setNumero] = useState(0)

  function increment(){
    if(numero < 10){
      setNumero(numero + 1)
    }
  }

  function decrement(){
    if(numero > 0){
      setNumero(numero - 1)
    }
  }

  function reset(){
    setNumero(0)
  }

  return (
    <div>
      <h2>Numero Atual: {numero}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Contador