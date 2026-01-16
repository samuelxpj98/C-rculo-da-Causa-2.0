
export const MISSIONS_31_DAYS = [
  "Sorria para 3 estranhos hoje.",
  "Ore por um amigo em segredo.",
  "Mande um versículo no WhatsApp.",
  "Ajude em uma tarefa de casa.",
  "Fale de Jesus para um colega.",
  "Agradeça a Deus por 5 coisas.",
  "Leia um Salmo em voz alta.",
  "Elogie alguém sinceramente.",
  "Ouça um louvor e medite.",
  "Seja gentil com quem te irrita.",
  "Compartilhe um testemunho curto.",
  "Faça um post sobre sua fé.",
  "Convide alguém para a Vibe.",
  "Perdoe alguém hoje mesmo.",
  "Dê um abraço em seus pais.",
  "Ore pelos líderes da igreja.",
  "Escreva um bilhete de incentivo.",
  "Não reclame de nada hoje.",
  "Ajude alguém com uma dúvida.",
  "Mande áudio orando por alguém.",
  "Seja o primeiro a cumprimentar.",
  "Organize seu quarto com alegria.",
  "Pense em 3 qualidades de um amigo.",
  "Compartilhe um vídeo da igreja.",
  "Faça uma oração de gratidão.",
  "Demonstre paciência no trânsito/fila.",
  "Ligue para um parente distante.",
  "Diga 'Jesus te ama' para alguém.",
  "Reflita sobre o amor de Deus.",
  "Seja luz onde você estiver.",
  "Termine o mês adorando ao Rei."
];

export const getFixedDailyMission = () => {
    const day = new Date().getDate(); // 1 a 31
    return MISSIONS_31_DAYS[day - 1] || MISSIONS_31_DAYS[0];
};
