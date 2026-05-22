// Aqui comeca o curso com o Claude de Typescript

// Primeiro conteudo: Narrowing (ja visto btw)

// function calcular(valor: string | number): string | number{
//   if(typeof valor === "number"){
//     return valor * 2
//   }
//   else {
//     return `Valor string nao calculavel: ${valor}`
//   }
// }

// Segundo conteudo: Type Guards (ja visto de uma forma diferente)

// type Cartao = {
//   valor: number
//   numeroCartao: string
//   parcelas: number
// }

// type Pix = {
//   valor: number
//   chavePix: string
// }

// function processarPagamento(metodo: Cartao | Pix): string {
//   if("numeroCartao" in metodo){
//     return `Cartao: ${metodo.numeroCartao} - ${metodo.parcelas}x de R$ ${(metodo.valor / metodo.parcelas).toFixed(2)}`
//   }
//   else {
//     return `Pix para ${metodo.chavePix} - R$ ${metodo.valor}`
//   }
// }

// const cartao: Cartao = {
//   valor: 10000,
//   numeroCartao: '5889 4552 0991',
//   parcelas: 12
// }

// const pix: Pix = {
//   valor: 500,
//   chavePix: 'joaocagao@gmail.com'
// }

// console.log(processarPagamento(cartao))
// console.log(processarPagamento(pix))

// Terceiro conteudo: Generics (ja visto vastamente)

// function primeiroElemento<T>(arr: T[]): T {
//   return arr[0]
// }

// console.log(primeiroElemento(["adsasdsd", "adssaddas", "adsasd"]))
// console.log(primeiroElemento([4441412, 1234, 123231]))


// interface Lista<T> {
//   itens: T[];
//   total: number;
//   pagina: number;
//   porPagina: number;
// }

// type Produto = {
//   nome: string
//   preco: number
// }

// type Usuario = {
//   nome: string
//   email: string
// }

// const pcGamer: Produto = {
//   nome: "PC Gamer i9-11000K",
//   preco: 3000
// }

// const mouseGamer: Produto = {
//   nome: "Mouse Gamer Razer",
//   preco: 800
// }

// const user: Usuario = {
//   nome: "Ronaldo Pereira",
//   email: "ronaldofenomeno@gmail.com"
// }

// const user2: Usuario = {
//   nome: "Leandro Junior",
//   email: "leandrinho22@gmail.com"
// }

// const apiProduto: Lista<Produto> = {
//   itens: [pcGamer, mouseGamer],
//   total: 2,
//   pagina: 1,
//   porPagina: 1
// }

// const apiUsuario: Lista<Usuario> = {
//   itens: [user, user2],
//   total: 2,
//   pagina: 2,
//   porPagina: 1
// }


// function maisCaro<T extends { preco: number }>(itens: T[]): T | undefined{
//   let caro = 0
//   for (let item of itens) {
//     if(item.preco > caro){
//       caro = item.preco
//     }
//   }
//   return itens.find(item => item.preco === caro)
// }

// type Produto = {
//   nome: string
//   preco: number
// }

// type Servico = {
//   descricao: string
//   preco: number
// }

// const produto1: Produto = {
//   nome: "Geladeira",
//   preco: 3000
// }

// const produto2: Produto = {
//   nome: "Cadeira",
//   preco: 300
// }

// const servico1: Servico = {
//   descricao: "Fazemos pintura de parede",
//   preco: 100
// }

// const servico2: Servico = {
//   descricao: "Instalamos ar condicionado",
//   preco: 50
// }

// console.log(maisCaro([produto2, produto1]))
// console.log(maisCaro([servico2, servico1]))


// Terceiro conteudo: Utility Types 

// Utility Types:
//  Partial<T> (deixa as prop opcionais);
//  Required<T> (deixa as prop obrigatorias);
//  Omit<T, K> (exclui a key que nao é necessaria);
//  Pick<T, K> (pega apenas as keys necessarias);
//  Record<K, V> (cria um obj com key value tipados);


// type Produto = {
//   id: number,
//   nome: string,
//   preco: number,
//   senha: string
// }

// type ProdutoPublico = Omit<Produto, "senha">

// type ProdutoAtualizacao = Partial<Produto>

// type ProdutoResumido = Pick<Produto, "nome" | "preco">

// const estoque: Record<string, number> = {
//   geladeira: 3000,
//   microondas: 1200,
//   cadeira: 300,
// } 