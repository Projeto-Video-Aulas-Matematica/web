import roteiro from '../public/pdfs/roteiro-aula-1.pdf';
import roteiro2 from '../public/pdfs/roteiro-aula-2.pdf';
import ex1 from '../public/pdfs/exercicios_conjuntos.pdf';
import ex2 from '../public/pdfs/exercicios_potenciacao.pdf';
import img1 from '../public/conjuntos.png';

export const highlights = [
  {
    title: 'Gratuito',
    description:
      'Curso pensado para estudantes que querem reforçar a base matemática sem custo.',
    icon: '∑',
  },
  {
    title: 'Modular',
    description:
      'Conteúdo separado em módulos e aulas para facilitar a organização do estudo.',
    icon: '□',
  },
  {
    title: 'Prático',
    description:
      'Aulas com exercícios e sequência de aprendizagem fácil de acompanhar.',
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
    'O projeto “Produção de Videoaulas para o Ensino de Matemática” tem como objetivo desenvolver e disponibilizar videoaulas de matemática para apoiar os estudos da comunidade. A iniciativa resulta de uma parceria entre os cursos de Matemática e Ciência da Computação, com apoio da direção-geral do campus de Foz do Iguaçu. Essa colaboração promove a troca de conhecimentos entre os acadêmicos envolvidos na organização, produção e divulgação das videoaulas, contribuindo para a criação de um espaço acessível de aprendizagem em matemática para a comunidade.',
};

export const modules = [
  {
    id: 'matematica-basica',
    title: 'Matemática Básica',
    description:
      'Esse módulo aborda conjuntos matemáticos, potências e raízes.',
    shortDescription: 'Conjuntos, potências e raízes.',
    videoUrl: 'https://www.youtube.com/embed/mDa6SkSvCDo',
    videoTitle: 'Apresentação - Módulo 1',
    image: img1,

    lessons: [
      {
        id: 'conjuntos',
        title: 'Aula 1 - Conjuntos',
        summary: 'Introdução a conjuntos.',
        videoUrl: 'https://www.youtube.com/embed/1xhT1oBRHwI',
        pdfUrl: roteiro,
        content:
          'Nesta aula, vemos sobre o que é um conjunto e sua aplicação na matemática.',
      },
      {
        id: 'raizes',
        title: 'Aula 2 - Raízes',
        summary:
          'Conceito de radiciação, simplificação e propriedades.',
        videoUrl: 'https://www.youtube.com/embed/mhrEuyOp_lk',
        pdfUrl: roteiro2,
        content:
          'A aula apresenta definição de radiciação, propriedades das raízes e suas propriedades.',
      },
      {
        id: 'potencias',
        title: 'Aula 3 - Potências',
        summary:
          'Expoentes, notação e propriedades fundamentais.',
        videoUrl: 'https://www.youtube.com/embed/BBNz5LjerhI',
        pdfUrl: roteiro2,
        content:
          'A aula apresenta definição de potência, regras de expoentes e suas propriedades.',
      },
    ],

    exercises: [
      {
        name: 'Exercício Conjuntos',
        pdfUrl: ex1,
      },
      {
        name: 'Exercício Potenciação + Radiciação',
        pdfUrl: ex2,
      },
    ],
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