import React, { useEffect, useRef, useState } from "react";

type Dados = {
  logradouro: string;
  bairro: string;
  localidade: string;
  complemento: string;
};

const BuscarCep = () => {
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<Dados | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function buscaCep(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`https://viacep.com.br/ws/${busca}/json/`);
    const responseJSON: Dados = await response.json();
    setLoading(false);
    setBusca("");

    setResult(responseJSON);
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusca(e.target.value);
  };

  if (loading) return <p>Buscando...</p>;

  return (
    <div>
      <form onSubmit={buscaCep}>
        <input
          ref={inputRef}
          onChange={onChangeInput}
          value={busca}
          placeholder="CEP"
          type="text"
        />
        <button type="submit">Buscar</button>
      </form>
      <div>
        {result && (
          <div>
            <p>Logradouro: {result.logradouro}</p>
            <p>Bairro: {result.bairro}</p>
            <p>Cidade: {result.localidade}</p>
            <p>Complemento: {result.complemento.toString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuscarCep;
