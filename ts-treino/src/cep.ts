interface Endereco {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

async function buscarCep(cep: string): Promise<Endereco> {
  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const dados = await resposta.json() as any
  if(dados.erro) throw new Error("Nao foi possivel encontrar o endereco!")

  return dados as Endereco
}

async function buscarVariosCeps(ceps: string[]): Promise<Endereco[]> {
  return Promise.all(ceps.map(cep => buscarCep(cep)))
}

function formatarEndereco(endereco: Endereco): string {
  const { cep, logradouro, bairro, localidade, uf } = endereco
  return ` CEP: ${cep}
 Logradouro: ${logradouro}
 Bairro: ${bairro}
 Cidade: ${localidade} - ${uf}
 -----------------`
}

async function main(){
  try {
    const enderecos = await buscarVariosCeps(["01310100", "20040020", "30112010"])
    enderecos.forEach(endereco => {
      console.log(formatarEndereco(endereco))
    })
  }catch(error) {
    console.log("ERROR:", error)
  }
}

main()