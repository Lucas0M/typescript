// // PASSO 1

// abstract class Funcionario {
//   constructor(public nome: string, public salario: number){}

//   abstract calcularBonus(): number
  
//   resumo(): string {
//     return `${this.nome} - Salario: R$${this.salario} | Bonus R$${this.calcularBonus()} | Total R$${this.salario + this.calcularBonus()}`
//   }

//   setSalario(novoSalario: number): number{
//     return this.salario = novoSalario
//   }
// }

// class Gerente extends Funcionario {
//   constructor(nome: string, salario: number){
//     super(nome, salario)
//   }

//   calcularBonus(): number {
//     return this.salario * 0.3
//   }
// }

// class Desenvolvedor extends Funcionario {
//   constructor(nome: string, salario: number){
//     super(nome, salario)
//   }

//   calcularBonus(): number {
//     return this.salario * 0.2
//   }
// }

// class Empresa {
//   private funcionarios: Funcionario[] = []

//   cadastrarFuncionario(funcionario: Funcionario): string {
//     if(this.funcionarios.includes(funcionario)) return "Ja possui esse funcionario cadastrado!"
//     this.funcionarios.push(funcionario)
//     return `${funcionario.nome} cadastrado com sucesso!`
//   }

//   listarFuncionarios(): void{
//     this.funcionarios.forEach(func => {
//       console.log(func.resumo())
//     })
//   }

//   buscarPorNome(nome: string): Funcionario | null {
//     return this.funcionarios.find(func => func.nome === nome) ?? null
//   }

//   darAumento(nome: string, percentual: number): string{
//     const funcionario: Funcionario | null = this.buscarPorNome(nome)
//     if(!funcionario) return "Funcionario nao encontrado!"
//     const novoSalario: number = (funcionario.salario * (1 + percentual / 100))
//     funcionario.setSalario(novoSalario)
    
//     return `Aumento aplicado! Novo salario de ${funcionario.nome}: R$${novoSalario}`
//   }
// }


// const gerente = new Gerente("Lucas Ronaldo", 1200)
// const empresa = new Empresa()

// console.log(empresa.cadastrarFuncionario(gerente))

// console.log("---LISTAGEM DE FUNCIONARIO 1---")
// empresa.listarFuncionarios()

// empresa.darAumento("Lucas Ronaldo", 15)

// console.log("---LISTAGEM DE FUNCIONARIO 2---")
// empresa.listarFuncionarios()