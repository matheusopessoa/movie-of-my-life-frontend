
interface Question {
  id: string;
  question: string;
  description: string;
  type: string;
}

interface QuestionStep {
  [key: number]: Question[];
}

export const getQuestionsByStep = (): QuestionStep => {
  return {
    1: [
      {
        id: "lifePhilosophy",
        question: "Qual é sua filosofia de vida em uma frase?",
        description: "Compartilhe um pensamento que guia suas decisões e valores.",
        type: "text"
      },
      {
        id: "preferSolitude",
        question: "Prefiro a solitude à companhia de outras pessoas.",
        description: "1 = Discordo totalmente, 5 = Concordo totalmente",
        type: "radio"
      },
      {
        id: "emotionalDecisions",
        question: "Minhas decisões são baseadas mais em emoções do que em lógica.",
        description: "1 = Discordo totalmente, 5 = Concordo totalmente",
        type: "radio"
      }
    ],
    2: [
      {
        id: "recentChallenge",
        question: "Qual foi o último grande desafio que você enfrentou?",
        description: "Descreva como se sentiu e como lidou com isso.",
        type: "text"
      },
      {
        id: "takeRisks",
        question: "Gosto de tomar riscos e viver aventuras.",
        description: "1 = Discordo totalmente, 5 = Concordo totalmente",
        type: "radio"
      },
      {
        id: "planSpontaneous",
        question: "Prefiro planejar em vez de ser espontâneo(a).",
        description: "1 = Discordo totalmente, 5 = Concordo totalmente",
        type: "radio"
      }
    ],
    3: [
      {
        id: "childhoodMemory",
        question: "Qual é a sua memória mais vívida da infância?",
        description: "Uma lembrança que você carrega com carinho ou que te marcou profundamente.",
        type: "text"
      },
      {
        id: "emotionalInspiration",
        question: "Histórias que me inspiram emocionalmente são mais importantes que mensagens profundas.",
        description: "1 = Discordo totalmente, 5 = Concordo totalmente",
        type: "radio"
      },
      {
        id: "preferredGenre",
        question: "Qual gênero cinematográfico mais ressoa com você?",
        description: "Escolha o gênero que mais gosta de assistir.",
        type: "genre"
      }
    ],
    4: [
      {
        id: "dreamScenario",
        question: "Se sua vida fosse um filme, como seria a cena mais memorável?",
        description: "Descreva o cenário, personagens, sentimentos e o que acontece nessa cena.",
        type: "text"
      }
    ]
  };
};

export const getTotalSteps = (): number => {
  return Object.keys(getQuestionsByStep()).length;
};
