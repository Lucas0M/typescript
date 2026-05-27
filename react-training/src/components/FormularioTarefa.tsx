import { useContext, useEffect, useRef, useState } from "react";
import { TarefasContext } from "../contexts/TarefasContext";

function FormularioTarefa() {
  const [titulo, setTitulo] = useState("");
  const contexto = useContext(TarefasContext);

  const inputRef = useRef<HTMLInputElement | null>(null);

  function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitulo(e.target.value);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <label>Titulo da Tarefa: </label>
      <input
        ref={inputRef}
        value={titulo}
        onChange={onChangeTitle}
        type="text"
      />
      <button
        onClick={() => {
          contexto?.adicionarTarefa(titulo);
          setTitulo("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default FormularioTarefa;
