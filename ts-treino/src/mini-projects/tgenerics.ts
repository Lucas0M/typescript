interface ItemCache<T> {
  valor: T;
  criadoEm: Date;
  expiraEm: Date;
}

class ICache<T> {
  private itens: Map<string, ItemCache<T>> = new Map()

  adicionar(chave: string, valor: T, minutosParaExpirar: number): void {
    const expira = new Date()
    expira.setMinutes(expira.getMinutes() + minutosParaExpirar)
    const item: ItemCache<T> = {
      valor,
      criadoEm: new Date(),
      expiraEm: expira
    }
    this.itens.set(chave, item)
  }

  buscar(chave: string): T | null {
    const key = this.itens.get(chave)
    if(key && key.expiraEm > new Date()) return key.valor
    return null
  }

  remover(chave: string): void {
    if(!this.itens.delete(chave)) throw new Error("Chave nao encontrada!")
  }

  tamanho(): number {
    return this.itens.size
  }
}

type Pessoa = {nome: string, idade: number}

const pessoa1: Pessoa = {
  nome: "Lucas",
  idade: 22
}

const pessoa2: Pessoa = {
  nome: "Pedro",
  idade: 14
}

const itemCache = new ICache<Pessoa>

itemCache.adicionar("Pessoa1", pessoa1, 10)
itemCache.adicionar("Pessoa2", pessoa2, 6)

itemCache.remover("Pessoa1")
console.log(itemCache.tamanho())

console.log(itemCache.buscar("Pessoa1"))
console.log(itemCache.buscar("Pessoa2"))


// const itemCache = new ICache<string>

// itemCache.adicionar("pessoa", "lucas", 30)
// itemCache.adicionar("pessoa2", "joao", 30)
// console.log(itemCache.tamanho())

// itemCache.remover("pessoa2")

// console.log(itemCache.buscar("pessoa"))
// console.log(itemCache.buscar("pessoa2"))