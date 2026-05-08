function calcularDesconto(pessoa: "estudante" | "professor" | "funcionario", preco: number): number {
  switch(pessoa){
    case "estudante":
       return preco * 0.2
    case "professor":
       return preco * 0.35
    case "funcionario":
       return preco * 0.5
    default:
      const impossivel: never = pessoa
      throw new Error(`Tipo nao tratado: ${impossivel}`)
  }
}

console.log("Desconto aplicado:", calcularDesconto("professor", 120))