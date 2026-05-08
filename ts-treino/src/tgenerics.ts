// interface Resposta<T> {
//   dados: T;
//   sucesso: boolean;
//   mensagem: string;
// }

// function criarResposta<T>(dados: T, mensagem: string): Resposta<T> {
//   const resposta: Resposta<T> = {
//     dados,
//     sucesso: true,
//     mensagem
//   }
//   return resposta
// }

// console.log(criarResposta("Lucas", "nome cadastrado"))
// console.log(criarResposta(22, "numero cadastrado"))
// console.log(criarResposta({ nome: "Lucas", idade: 22 }, "cadastro concluido"))


class Fila<T> {
  private itens: T[] = []

  entrar(item: T): void {
    this.itens.push(item)
  }

  sair(): T | null {
    return this.itens.shift() ?? null
  }

  tamanho(): number {
    return this.itens.length
  }

  estaVazia(): boolean {
    return this.itens.length === 0
  }
}

const filaString = new Fila<string>
const filaNumber = new Fila<number>

filaString.entrar("Ola")
console.log(filaString.tamanho())
console.log(filaString.sair())
console.log(filaString.estaVazia())

console.log("-----------------------")

filaNumber.entrar(3)
filaNumber.entrar(4)
console.log(filaNumber.tamanho())
console.log(filaNumber.sair())
console.log(filaNumber.estaVazia())