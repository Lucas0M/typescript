const configApp = {
  appNome: "Snapchat",
  versao: "5.2.0.1",
  porta: "3333",
  debug: false,
  idioma: "pt-BR",
  maxUsuarios: 99999
} as const

type ConfigApp = typeof configApp
type ChaveConfigApp = keyof typeof configApp

function obterValor(chave: ChaveConfigApp) {
  return `${chave}: ${configApp[chave]}`
}

function listarConfig(): void {
  for(const [chave, valor] of Object.entries(configApp)) {
    console.log(`${chave} - ${valor}`)
  }
}

function validarConfig(chave: ChaveConfigApp, valor: unknown): boolean {
  return typeof valor === typeof configApp[chave]
}

listarConfig()
console.log("-----------------")
console.log(obterValor("idioma"))
console.log(validarConfig("porta", 222))


