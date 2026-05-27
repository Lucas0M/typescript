import React, { useEffect, useRef, useState } from "react";

interface Formulario {
  nome: string;
  email: string;
}

const Form = () => {
  const [formData, setFormData] = useState<Formulario>({
    nome: "",
    email: "",
  });

  const [submited, setSubmited] = useState<Formulario | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, nome: e.target.value });
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const onSubmitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      nome: "",
      email: "",
    });
    setSubmited({ ...formData });
  };

  return (
    <div>
      <form onSubmit={onSubmitEvent}>
        <input
          value={formData.nome}
          ref={inputRef}
          onChange={onChangeName}
          placeholder="nome"
          type="text"
        />
        <input
          value={formData.email}
          onChange={onChangeEmail}
          placeholder="email"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
      {submited && (
        <div>
          <p>Nome: {submited.nome}</p>
          <p>Email: {submited.email}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
