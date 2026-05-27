import { createContext } from "react";

type TemaTypeContext = {
  tema: "claro" | "escuro";
  toggleTema: () => void;
};

export const TemaContext = createContext<TemaTypeContext | null>(null);
