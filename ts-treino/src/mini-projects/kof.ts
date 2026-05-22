function atualizarProprioedade<T, K extends keyof T>(obj: T, chave: K, valor: T[K]) {
  obj[chave] = valor
  return `${String(chave)} atualizado com sucesso!`
} 

function copiarProprioedades<T, K extends keyof T>(obj1: T, obj2: T, chaves: K[]): T {
  chaves.forEach(chave => {
    obj1[chave] = obj2[chave]
  })
  return obj1
}

interface Funcionario {
  nome: string,
  cargo: string,
  salario: number,
  ativo: boolean
}

const cozinheiro: Funcionario = {
  nome: "Joao",
  cargo: "Cozinheiro",
  salario: 12000,
  ativo: true
}

const jardineiro: Funcionario = {
  nome: "Ronaldo",
  cargo: "Jardineiro",
  salario: 3000,
  ativo: false
}

console.log(atualizarProprioedade(cozinheiro, "ativo", false))
console.log(copiarProprioedades(cozinheiro, jardineiro, [ "salario", "nome" ]))
