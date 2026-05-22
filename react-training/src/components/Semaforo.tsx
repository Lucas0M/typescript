import { useState } from 'react';

type Cores = "🔴" | "🟡" | "🟢"

function Semaforo() {
  const[cor, setCor] = useState<Cores>("🔴")


  function proxima(){
    if(cor === "🔴"){
      setCor("🟡")
    } else if(cor === "🟡"){
      setCor("🟢")
    } else {
      setCor("🔴")
    }
  }

  return (
    <div>
      <h2>Cor Atual: {cor}</h2>
      <button onClick={proxima}>Proima cor</button>
    </div>
  )
}

export default Semaforo