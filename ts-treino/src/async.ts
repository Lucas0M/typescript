// interface Usuario {
//   id: number;
//   nome: string;
//   email: string;
// }

// const Usuarios: Usuario[] = [
//   {
//     id: 1,
//     nome: "Lucas",
//     email: "lucasmacajacques@gmail.com"
//   },
//   {
//     id: 2,
//     nome: "Joao",
//     email: "joaomacajacques@gmail.com"
//   },
//   {
//     id: 3,
//     nome: "Pedro",
//     email: "pedromacajacques@gmail.com"
//   }
// ]

// function esperar(ms: number): Promise<void> {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

// async function buscarUsuario(id: number): Promise<Usuario> {
//   if(id <= 0) throw new Error("Id invalido!")
//   if(id > 3) throw new Error("Usuario nao encontrado!")

//   await esperar(1000)
//   const usuario = Usuarios.find(usuario => usuario.id === id)

//   if(!usuario) throw new Error("Usuario nao encontrado")

//   return usuario
// }

// async function buscarVarios(ids: number[]): Promise<Usuario[]>{
//   return Promise.all(ids.map(id => buscarUsuario(id)))
// }

// ;(async (ids: number[]) => {
//   try{
//     console.time("buscar")
//     const usuario = await buscarVarios(ids)
//     console.timeEnd("buscar")
//     console.log(usuario)
//   }catch(error) {
//     console.log("Deu erro:", error)
//   }
// })([1, 2, 3])