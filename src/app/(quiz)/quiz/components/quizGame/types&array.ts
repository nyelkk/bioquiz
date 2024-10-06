export interface IQuizGame {
name: string;
};

export interface IQuestion {
    question: string;
    answer: boolean;
}

export const questions: IQuestion[] = [
    { 
        question: 'As florestas tropicais são responsáveis por produzir mais de 20% do oxigênio do planeta.', 
        answer: true 
    },
    { 
        question: 'O efeito estufa é inteiramente causado pelas atividades humanas.', 
        answer: false 
    },
    { 
        question: 'A poluição do ar pode afetar diretamente a saúde das plantas e animais, além de seres humanos.', 
        answer: true 
    },
    { 
        question: 'Espécies invasoras sempre trazem benefícios para os ecossistemas', 
        answer: false 
    },
    { 
        question: 'A reciclagem de papel pode economizar uma grande quantidade de energia e água.', 
        answer: true 
    },
    { 
        question: 'A biodiversidade de um ecossistema não afeta sua resiliência a mudanças ambientais.', 
        answer: false 
    },
    { 
        question: 'O derretimento das calotas polares afeta apenas as regiões polares e não influencia o clima global.', 
        answer: false 
    },
    { 
        question: 'A energia solar é uma fonte renovável que não emite gases de efeito estufa.', 
        answer: true 
    },
    { 
        question: 'O desmatamento contribui para o aumento da temperatura global.', 
        answer: true 
    },
    { 
        question: ' Áreas úmidas, como pântanos, são habitats essenciais para a filtragem de água e para a preservação da biodiversidade.', 
        answer: true 
    },
];