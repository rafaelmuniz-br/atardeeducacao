// Catálogo de cursos do AVA (Ambiente Virtual de Aprendizagem) do A TARDE
// Educação. O primeiro curso é real — link e imagem vieram direto do AVA em
// produção (http://187.1.111.80). Os demais são placeholders (sem imagem
// real, com fundo em degradê e link apontando pro login do AVA em vez de um
// id de curso que não existe) só pra mostrar como a grade fica com vários
// cursos — a equipe deve substituir por cursos reais (imagem + link direto
// pro curso) conforme forem publicados no AVA.
export interface Curso {
  slug: string
  titulo: string
  tag: string
  data: string
  descricao: string
  imagem?: string
  cor?: string
  linkAva: string
  placeholder?: boolean
}

export const cursos: Curso[] = [
  {
    slug: 'alfabetizacao-e-letramento-com-o-jornal',
    titulo: 'Alfabetização e Letramento com o Jornal',
    tag: 'Jornal na Escola',
    data: '2026-08-01',
    descricao:
      'Formação que propõe o uso do jornal como ferramenta pedagógica no processo de alfabetização e letramento, unindo leitura crítica da mídia às etapas iniciais da aprendizagem da leitura e da escrita.',
    imagem: '/cursos/alfabetizacao-e-letramento.jpg',
    linkAva: 'http://187.1.111.80/course/view.php?id=11',
  },
  {
    slug: 'educacao-financeira-na-sala-de-aula',
    titulo: 'Educação Financeira na Sala de Aula',
    tag: 'Educação Financeira',
    data: '2026-07-15',
    descricao:
      'Estratégias práticas para trabalhar consumo consciente, planejamento e tomada de decisão com estudantes, conectando educação financeira ao cotidiano da turma.',
    cor: '#1b93dc',
    linkAva: 'http://187.1.111.80/login/index.php',
    placeholder: true,
  },
  {
    slug: 'jornal-como-ferramenta-socioambiental',
    titulo: 'O Jornal como Ferramenta Socioambiental',
    tag: 'Socioambiental',
    data: '2026-06-20',
    descricao:
      'Como usar reportagens e conteúdo jornalístico pra discutir sustentabilidade, território e cidadania em sala de aula, a partir de casos reais.',
    cor: '#0e8f6b',
    linkAva: 'http://187.1.111.80/login/index.php',
    placeholder: true,
  },
  {
    slug: 'educacao-midiatica-e-tecnologia',
    titulo: 'Educação Midiática e Tecnologia',
    tag: 'Tecnologia e Mídia',
    data: '2026-05-10',
    descricao:
      'Formação voltada à leitura crítica de mídias digitais, análise de informação e produção responsável de conteúdo com estudantes.',
    cor: '#7b5cf0',
    linkAva: 'http://187.1.111.80/login/index.php',
    placeholder: true,
  },
  {
    slug: 'empreendedorismo-para-educadores',
    titulo: 'Empreendedorismo para Educadores',
    tag: 'Empreendedorismo',
    data: '2026-04-05',
    descricao:
      'Ferramentas para estimular iniciativa, criatividade e protagonismo estudantil através de projetos que conectam sala de aula e desafios reais.',
    cor: '#f58220',
    linkAva: 'http://187.1.111.80/login/index.php',
    placeholder: true,
  },
]
