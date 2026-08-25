// Imagens de cada premiação, baixadas do site oficial de cada uma e
// recortadas em 480x480 pra caber no card (ver public/eventos/).
export interface Evento {
  nome: string
  resumo: string
  texto: string
  tags: string[]
  link: string
  imagem: string
}

export const eventos: Evento[] = [
  {
    nome: 'Concurso Cultural Jovem Jornalista',
    resumo: 'Estudantes no universo da comunicação e do jornalismo.',
    texto:
      'Uma iniciativa cultural que aproxima estudantes do universo da comunicação e do jornalismo, estimulando leitura, escrita, produção de conteúdo e olhar crítico sobre a realidade. A proposta valoriza a autoria dos jovens e cria oportunidades para que suas vozes encontrem espaço.',
    tags: ['concurso', 'estudantes', 'jornalismo', 'cultura'],
    link: 'https://jovemjornalista.atarde.com.br/',
    imagem: '/eventos/jovem-jornalista.jpg',
  },
  {
    nome: 'Prêmio Ecoinovar',
    resumo: 'Reconhecimento a projetos de sustentabilidade e inovação.',
    texto:
      'Uma premiação que reconhece iniciativas e projetos que apresentam ideias, práticas e soluções relacionadas à sustentabilidade e à transformação socioambiental. A iniciativa valoriza o protagonismo e a capacidade de criar respostas para desafios presentes no cotidiano.',
    tags: ['prêmio', 'sustentabilidade', 'socioambiental', 'inovação'],
    link: 'https://atardeeducacaopremia.atarde.com.br/concursos/ecoinovar',
    imagem: '/eventos/ecoinovar.jpg',
  },
  {
    nome: 'Prêmio Trânsito de Ideias',
    resumo: 'Produções textuais de estudantes sobre trânsito e cidadania.',
    texto:
      'O Trânsito de Ideias é uma premiação educacional do programa A TARDE Educação que reconhece produções textuais de estudantes da rede pública estadual da Bahia. A iniciativa incentiva a reflexão crítica sobre os desafios do trânsito, a cidadania e a sustentabilidade urbana, estimulando o protagonismo juvenil e destacando o papel da escrita como ferramenta criativa e transformadora.',
    tags: ['prêmio', 'trânsito', 'cidadania', 'produção textual'],
    link: 'https://atardeeducacaopremia.atarde.com.br/concursos/detran',
    imagem: '/eventos/transito-ideias.jpg',
  },
]
