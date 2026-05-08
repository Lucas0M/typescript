// // 1 PASSO

// // ENUM, TYPE, INTERFACE

// enum StatusProduto {
//   Disponivel = "Disponivel",
//   Indisponivel = "Indisponivel",
//   Descontinuado = "Descontinuado"
// }

// type Categoria = "eletronico" | "roupa" | "alimento";

// interface Produto {
//   id: number,
//   nome: string,
//   preco: number,
//   categoria: Categoria,
//   status: StatusProduto,
//   descricao?: string
// }

// // 2 PASSO

// // "BANCO DE DADOS" FALSO & FUNC ADDPRODUTO

// const produtos: Produto[] = []

// let proximoId: number = 1


// function cadastrarProduto(dados: Omit<Produto, "id">): Produto {
//   const produto: Produto = { id: proximoId++, ...dados }
//   produtos.push(produto)
//   return produto
// }

// function listarProdutos(): void{
//   for(let produto of produtos){
//     console.log(`[${produto.id}] ${produto.nome} - R$ ${produto.preco} (${produto.categoria}) | ${produto.status}`)
//   }
// } 

// function procurarPorId(id: number): Produto | null {
//   return produtos.find(produto => produto.id === id) ?? null
// }

// function alterarStatus(id: number, status: StatusProduto): string{  
//   const produto: Produto | null = procurarPorId(id)
//   if (!produto) return `Produto não encontrado`
//   produto.status = status
//   return `Status atualizado com sucesso`
// }


// cadastrarProduto({ 
//   nome: "Microondas",
//   preco: 500,
//   categoria: "eletronico",
//   status: StatusProduto.Disponivel,
// })

// cadastrarProduto({ 
//   nome: "Camiseta",
//   preco: 100,
//   categoria: "roupa",
//   status: StatusProduto.Indisponivel,
//   descricao: "Atualmente estamos sem camisetas no estoque."
// })

// cadastrarProduto({ 
//   nome: "Arroz",
//   preco: 20,
//   categoria: "alimento",
//   status: StatusProduto.Descontinuado,
//   descricao: "O produto arroz foi descontinuado em nossa loja"
// })

// listarProdutos()
// console.log(procurarPorId(1))
// console.log(procurarPorId(2))
// console.log(procurarPorId(3))
// console.log(alterarStatus(1, StatusProduto.Descontinuado))
// console.log(alterarStatus(2, StatusProduto.Disponivel))
// console.log(alterarStatus(3, StatusProduto.Indisponivel))
// listarProdutos()