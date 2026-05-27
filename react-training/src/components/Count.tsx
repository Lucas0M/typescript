import useContador from "../hooks/useContador";

function Count() {
  const { contador, incrementar, decrementar, resetar } = useContador(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
}

export default Count;
