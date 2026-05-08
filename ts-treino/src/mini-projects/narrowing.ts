interface EntregaExpresso {
  tipo: "expresso";
  peso: number;
  distancia: number;
}

interface EntregaEconomica {
  tipo: "economica";
  peso: number;
  prazo: number // dias
}

interface EntregaAgendada{
  tipo: "agendada";
  peso: number;
  data: string;
  periodo: "manha" | "tarde" | "noite"
}

type Entrega = EntregaExpresso | EntregaEconomica | EntregaAgendada

function calcularFrete(entrega: Entrega): number {
  if(entrega.tipo === "expresso"){
    return (10 * entrega.distancia) + (2 * entrega.peso)
  } else if(entrega.tipo === "economica"){
    return (1.5 * entrega.peso) + (5 * entrega.prazo)
  } else if(entrega.tipo === "agendada"){
    const peso = (3 * entrega.peso)
    switch(entrega.periodo){
      case "manha":
        return peso + 15
      case "tarde":
        return peso + 20
      case "noite":
        return peso + 30
    }
  } else {
    const impossivel: never = entrega
    throw new Error(`Nenhum tipo de entrega encontrado! ${impossivel}`)
  }
}

function resumoEntrega(entrega: Entrega): string {
  return `A Entrega do tipo ${entrega.tipo} tera um frete de: ${calcularFrete(entrega)}`
}

const entregaExpresso: EntregaExpresso = {
  tipo: "expresso",
  peso: 0.2,
  distancia: 3
}

const entregaEconomica: EntregaEconomica = {
  tipo: "economica",
  peso: 0.1,
  prazo: 6
}


const entregaAgendada: EntregaAgendada = {
  tipo: "agendada",
  peso: 0.03,
  data: "10/05/2026",
  periodo: "tarde"
}

console.log(resumoEntrega(entregaExpresso))
console.log(resumoEntrega(entregaEconomica))
console.log(resumoEntrega(entregaAgendada))