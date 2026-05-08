// function agrupar<K extends string, V>(chaves: K[], valorPadrao: V): Record<K, V> {
//   const resultado = {} as Record<K, V>
//   chaves.forEach(chave => resultado[chave] = valorPadrao)
//   return resultado
// }

// const placar = agrupar(["Lucas", "Jhon", "Pedro"], 0)
// console.log(placar)

type Categoria = "basico" | "intermediario" | "avancado"

interface InfoPlano {
  preco: number;
  descricao: string;
}

type tabela = Record<Categoria, InfoPlano>
const tabelaDePrecos: tabela = {
  basico: { 
    preco: 100,
    descricao: "Produto basico!"
  },
  intermediario: { 
    preco: 200,
    descricao: "Produto intermediario!"
  },
  avancado: { 
    preco: 300,
    descricao: "Produto avancado!"
  },
}

function consultarPlano(categoria: Categoria): string {
  const plano = tabelaDePrecos[categoria]
  return `Plano ${categoria} | R$${plano.preco} - ${plano.descricao}`
}

console.log(consultarPlano("basico"))
console.log(consultarPlano("intermediario"))
console.log(consultarPlano("avancado"))