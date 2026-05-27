import React, { useEffect, useRef, useState } from "react";

interface FormData {
  name: string;
  email: string;
}

const Formulario = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
  });
  const [submited, setSubmited] = useState<FormData | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onChangeNome = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: e.target.value });
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({
      name: "",
      email: "",
    });
    setSubmited({ ...form });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={onChangeNome}
          ref={inputRef}
          type="text"
          id="name"
          value={form.name}
          name="name"
        />
        <label htmlFor="email">Email:</label>
        <input
          onChange={onChangeEmail}
          value={form.email}
          type="text"
          id="email"
          name="email"
        />
        <button type="submit">Submit</button>
      </form>
      {submited && (
        <div>
          <p>Nome: {submited.name}</p>
          <p>Email: {submited.email}</p>
        </div>
      )}
    </div>
  );
};

export default Formulario;
