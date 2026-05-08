interface NotificacaoEmail {
  tipo: "email";
  destinatario: string;
  assunto: string;
  corpo: string;
}

interface NotificacaoSms {
  tipo: "sms";
  telefone: string;
  mensagem: string;
}

interface NotificacaoPush {
  tipo: "push";
  titulo: string;
  mensagem: string;
  icone?: string;
}

type Notificacao = NotificacaoEmail | NotificacaoSms | NotificacaoPush

function processarNotificacao(notificacao: Notificacao): string {
  if(notificacao.tipo === "email"){
    return `📧 Email enviado para ${notificacao.destinatario} | Assunto: ${notificacao.assunto}`
  } else if(notificacao.tipo === "sms") {
    return `📱 SMS enviado para ${notificacao.telefone} | Mensagem: ${notificacao.mensagem}`
  } else {
    return `🔔 Push enviado | ${notificacao.titulo}: ${notificacao.mensagem}`
  }
}

const notificacaoEmail: NotificacaoEmail = {
  tipo: "email",
  destinatario: "Lucas",
  assunto: "Sobre a partida de cs",
  corpo: "Vitoria do time dos ct"
}

const notificacaoSms: NotificacaoSms = {
  tipo: "sms",
  telefone: "(44)99994-4342",
  mensagem: "Hoje o dia esta lindo",
}

const notificacaoPush: NotificacaoPush = {
  tipo: "push",
  titulo: "Rodada sobre CSGO",
  mensagem: "A pain esta ganhando tudo",
}


const notificacoes: Notificacao[] = [notificacaoEmail, notificacaoSms, notificacaoPush]

notificacoes.forEach(noti => {
  console.log(processarNotificacao(noti))
})