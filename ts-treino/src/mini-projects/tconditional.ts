type nonNullable<T> = T extends null | undefined ? never : T;

type Aplainar<T> = T extends Array<infer U> ? U : T;

type RetornarTipoFuncao<T> = T extends (...args: any[]) => infer R ? R : never;

function processarValor<T>(valor: T): unknown {
  if(Array.isArray(valor)) {
    return valor[0] as nonNullable<T>;
  } else if (typeof valor === "function") {
    return valor() as nonNullable<T>;
  }
  return String(valor) as nonNullable<T>;
}

console.log(processarValor([1, 2, 3])); 
console.log(processarValor(() => "Olá, mundo!")); 
console.log(processarValor(3)); 