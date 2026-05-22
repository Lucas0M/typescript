interface Prod {
  id: number,
  nome: string,
  preco: number
}

function obterPropriedad<T, K extends keyof T>(obj: T, chave: K): T[K] {
  return obj[chave]
}

const produto: Prod = {
  id: 1,
  nome: "Abacaxi",
  preco: 15.33
}

console.log(obterPropriedad(produto, "id"))
console.log(obterPropriedad(produto, "nome"))
console.log(obterPropriedad(produto, "preco"))