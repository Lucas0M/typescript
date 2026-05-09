const configuracoes = {
  name: "Music Config",
  volume: 12,
  active: true,
  music: "114 PJ houdini"
}

type Config = typeof configuracoes

type ChaveConfig = keyof typeof configuracoes

function obterConfig(chave: ChaveConfig) {
  return configuracoes[chave]
}

console.log(obterConfig("name"))
console.log(obterConfig("music"))
console.log(obterConfig("volume"))
console.log(obterConfig("active"))