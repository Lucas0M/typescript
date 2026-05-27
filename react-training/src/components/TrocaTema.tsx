import { useState } from "react";

type Theme = "light" | "dark";

const TrocaTema = () => {
  const [themes, setThemes] = useState<Theme>("light");

  const toggleTheme = () => {
    setThemes((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        backgroundColor: themes === "light" ? "lightgray" : "black",
        color: themes === "light" ? "black" : "white",
        height: "100vh",
      }}
    >
      <p>Trocar Tema</p>
      <button onClick={toggleTheme}>Alterar Tema</button>
      <p>Tema ativo: {themes}</p>
    </div>
  );
};

export default TrocaTema;
