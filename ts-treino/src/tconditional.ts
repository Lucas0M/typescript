type EhArray<T> = T extends Array<any> ? "E array" : "Nao e array"

type DesembrulharArray<T> = T extends Array<infer Item> ? Item : T

type TornarOpcional<T> = T extends null | undefined ? never : T

type A = DesembrulharArray<string[]> 
type B = DesembrulharArray<number>  

type C = TornarOpcional<string>
type D = TornarOpcional<null>  

type TesteString = EhArray<string>
type TesteArray = EhArray<string[]>