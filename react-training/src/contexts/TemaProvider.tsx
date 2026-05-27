import { useState } from "react";
import { TemaContext } from "./TemaContext";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState<"claro" | "escuro">("claro");

  function toggleTema() {
    setTema((prevTema) => (prevTema === "claro" ? "escuro" : "claro"));
  }

  return (
    <TemaContext.Provider value={{ tema, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
}
