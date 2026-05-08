function descrever(value: string | number | boolean){
  if(typeof value === "string"){
    return `Texto: ${value.toUpperCase()}`
  }else if(typeof value === "number"){
    return `Numero: ${value.toFixed(2)}`
  }else {
    return `Boolean: ${value ? `sim` : `nao`}`
  }
}

console.log(descrever(true))


