export const highlights = [
  {
    title: 'Gratuito',
    description: 'Curso pensado para estudantes que querem reforçar a base matemática sem custo.',
    icon: '∑',
  },
  {
    title: 'Modular',
    description: 'Conteúdo separado em módulos e aulas para facilitar a organização do estudo.',
    icon: '□',
  },
  {
    title: 'Prático',
    description: 'Aulas com exercícios e sequência de aprendizagem fácil de acompanhar.',
    icon: 'π',
  },
];

export const course = {
  title: 'Curso de Matemática Unioeste',
  subtitle: 'Do básico ao avançado',
  description:
    'Projeto universitário de curso online com foco em matemática básica, progressão por módulos, aulas em vídeo e exercícios para fixação.',
  ctaLabel: 'Comece Agora',
  introText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis mauris a mauris lacinia laoreet quis in nunc. Sed quis tristique sem. Donec sapien orci, molestie varius elementum ultricies, laoreet at nisi. Vivamus odio nisi, pharetra nec accumsan quis, varius ac sem. Sed vel congue purus. Sed sollicitudin, justo non condimentum vulputate.',
};

export const modules = [
  {
    id: 'matematica-basica',
    title: 'Matemática Básica',
    shortDescription: 'Números, operações, conjuntos, potências e raízes.',
    accent: 'accent-blue',
    lessons: [
      {
        id: 'conjuntos',
        title: 'Aula 1 - Conjuntos',
        summary: 'Introdução a conjuntos, pertinência, inclusão e operações básicas.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content:
          'Nesta aula, o aluno entende o conceito de conjunto, representação por extensão e por compreensão, além das operações mais comuns, como união, interseção e diferença.',
      },
      {
        id: 'raizes',
        title: 'Aula 2 - Raízes',
        summary: 'Conceito de radiciação, simplificação e propriedades.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content:
          'Aqui o foco é revisar radiciação, propriedades das raízes e exercícios práticos para desenvolver agilidade nos cálculos.',
      },
      {
        id: 'potencias',
        title: 'Aula 3 - Potências',
        summary: 'Expoentes, notação e propriedades fundamentais.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content:
          'A aula apresenta definição de potência, regras de expoentes e resolução de exercícios de fixação.',
      },
    ],
    exercises: [
      'Exercícios Aula 1',
      'Exercícios Aula 2',
    ],
    nextModuleName: 'Geometria',
  },
  {
    id: 'geometria',
    title: 'Geometria',
    shortDescription: 'Formas, ângulos, áreas e perímetros.',
    accent: 'accent-green',
    lessons: [
      {
        id: 'formas-geometricas',
        title: 'Aula 1 - Formas Geométricas',
        summary: 'Principais figuras planas e seus elementos.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content:
          'O conteúdo apresenta figuras planas, lados, vértices e primeiros conceitos de geometria para continuidade do curso.',
      },
    ],
    exercises: ['Lista de figuras planas'],
    nextModuleName: 'Em breve',
  },
  {
    id: 'algebra',
    title: 'Álgebra',
    shortDescription: 'Expressões, equações e manipulação algébrica.',
    accent: 'accent-rose',
    lessons: [
      {
        id: 'expressoes',
        title: 'Aula 1 - Expressões Algébricas',
        summary: 'Introdução às expressões e simplificação.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content:
          'O módulo introduz variáveis, termos algébricos e simplificação de expressões de forma gradual.',
      },
    ],
    exercises: ['Lista introdutória de álgebra'],
    nextModuleName: 'Em breve',
  },
  {
    id: 'funcoes',
    title: 'Funções',
    shortDescription: 'Noções iniciais de domínio, imagem e gráficos.',
    accent: 'accent-gold',
    lessons: [
      {
        id: 'introducao-funcoes',
        title: 'Aula 1 - Introdução a Funções',
        summary: 'O que é função, domínio, contradomínio e imagem.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content:
          'A aula explora o conceito de função e a interpretação de relações entre conjuntos.',
      },
    ],
    exercises: ['Exercícios de domínio e imagem'],
    nextModuleName: 'Em breve',
  },
  {
    id: 'estatistica',
    title: 'Estatística',
    shortDescription: 'Leitura de dados, tabelas e gráficos.',
    accent: 'accent-purple',
    lessons: [
      {
        id: 'graficos',
        title: 'Aula 1 - Gráficos',
        summary: 'Noções básicas de gráficos e interpretação.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content:
          'Apresenta os principais tipos de gráficos e como interpretar tendências e comparações.',
      },
    ],
    exercises: ['Leitura de gráficos'],
    nextModuleName: 'Em breve',
  },
  {
    id: 'revisao',
    title: 'Revisão Geral',
    shortDescription: 'Retomada dos principais tópicos do curso.',
    accent: 'accent-slate',
    lessons: [
      {
        id: 'revisao-final',
        title: 'Aula 1 - Revisão Final',
        summary: 'Revisão dos conteúdos mais importantes.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content:
          'Último módulo com revisão ampla e consolidação do conteúdo estudado ao longo da trilha.',
      },
    ],
    exercises: ['Lista de revisão'],
    nextModuleName: 'Fim do curso',
  },
];

export const team = [
  {
    name: 'Pessoa 1',
    role: 'Responsável pelo projeto',
    description:
      'Participa da organização geral da plataforma, definição dos módulos e estrutura de conteúdo.',
  },
  {
    name: 'Pessoa 2',
    role: 'Apoio acadêmico',
    description:
      'Atua na revisão do material e na construção das páginas focadas em navegação simples para o aluno.',
  },
];
