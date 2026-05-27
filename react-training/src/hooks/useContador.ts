import { useState } from "react";

function useContador(valorInicial: number) {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => {
    setContador((prev) => prev + 1);
  };

  const decrementar = () => {
    setContador((prev) => prev - 1);
  };

  const resetar = () => {
    setContador(valorInicial);
  };

  return { contador, incrementar, decrementar, resetar };
}

export default useContador;
