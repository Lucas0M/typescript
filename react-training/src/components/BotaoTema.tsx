import { useContext } from "react";
import { TemaContext } from "../contexts/TemaContext";

function BotaoTema() {
  const contexto = useContext(TemaContext);

  return (
    <div
      style={{
        backgroundColor: contexto?.tema === "claro" ? "lightgray" : "black",
        height: "100vh",
      }}
    >
      <button onClick={contexto?.toggleTema}>Tema: {contexto?.tema}</button>
    </div>
  );
}

export default BotaoTema;
