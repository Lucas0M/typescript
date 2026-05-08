type NomeTema = "claro" | "escuro" | "contraste"

interface Tema {
  cores: {
    primaria: string,
    secundaria: string,
    fundo: string,
    texto: string,
  },
  fonte: {
    familia: string,
    tamanho: number
  },
  ativo: boolean
}

const temas = {
  claro: {
    cores: {
      primaria: "rgb(0, 248, 124)",
      secundaria: "rgb(27, 141, 255)",
      fundo: "#000",
      texto: "#fff"
    },
    fonte: {
      familia: "Poppins",
      tamanho: 16
    },
    ativo: false
  },
  escuro: {
    cores: {
      primaria: "rgb(0, 59, 30)",
      secundaria: "rgb(0, 37, 73)",
      fundo: "#666666",
      texto: "#630000"
    },
    fonte: {
      familia: "Sans-serif",
      tamanho: 15
    },
    ativo: true
  },
  contraste: {
    cores: {
      primaria: "rgb(252, 122, 0)",
      secundaria: "rgb(247, 252, 0)",
      fundo: "#ff0000",
      texto: "#fff"
    },
    fonte: {
      familia: "Bebas neue",
      tamanho: 18
    },
    ativo: false
  }
} satisfies Record<NomeTema, Tema>

function ativarTema(nome: NomeTema): string {
  for(const [chave, valor] of Object.entries(temas)){
    valor.ativo = chave === nome
  }
  return `Tema ${nome} ativado!`
}

function temaAtivo(): NomeTema | null {
  for(const [chave, valor] of Object.entries(temas)){
    if(valor.ativo) return chave as NomeTema
  }
  return null
}

console.log(ativarTema("contraste"))
console.log(ativarTema("escuro"))
console.log(ativarTema("claro"))
console.log(ativarTema("claro"))
console.log(temas)
console.log(temaAtivo())