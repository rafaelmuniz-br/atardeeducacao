// Cores extraídas dos próprios sites oficiais de cada premiação (edição
// 2026), pra cada card do site institucional refletir a identidade visual
// do evento que representa.
export interface Evento {
  nome: string
  resumo: string
  texto: string
  tags: string[]
  link: string
  corPrimaria: string
  corAccent: string
}

export const eventos: Evento[] = [
  {
    nome: 'Concurso Cultural Jovem Jornalista',
    resumo: 'Estudantes no universo da comunicação e do jornalismo.',
    texto:
      'Uma iniciativa cultural que aproxima estudantes do universo da comunicação e do jornalismo, estimulando leitura, escrita, produção de conteúdo e olhar crítico sobre a realidade. A proposta valoriza a autoria dos jovens e cria oportunidades para que suas vozes encontrem espaço.',
    tags: ['concurso', 'estudantes', 'jornalismo', 'cultura'],
    link: 'https://jovemjornalista.atarde.com.br/',
    corPrimaria: '#056dac',
    corAccent: '#e32c2c',
  },
  {
    nome: 'Prêmio Ecoinovar',
    resumo: 'Reconhecimento a projetos de sustentabilidade e inovação.',
    texto:
      'Uma premiação que reconhece iniciativas e projetos que apresentam ideias, práticas e soluções relacionadas à sustentabilidade e à transformação socioambiental. A iniciativa valoriza o protagonismo e a capacidade de criar respostas para desafios presentes no cotidiano.',
    tags: ['prêmio', 'sustentabilidade', 'socioambiental', 'inovação'],
    link: 'https://atardeeducacaopremia.atarde.com.br/concursos/ecoinovar',
    corPrimaria: '#0032a4',
    corAccent: '#96a22f',
  },
  {
    nome: 'Prêmio Trânsito de Ideias',
    resumo: 'Produções textuais de estudantes sobre trânsito e cidadania.',
    texto:
      'O Trânsito de Ideias é uma premiação educacional do programa A TARDE Educação que reconhece produções textuais de estudantes da rede pública estadual da Bahia. A iniciativa incentiva a reflexão crítica sobre os desafios do trânsito, a cidadania e a sustentabilidade urbana, estimulando o protagonismo juvenil e destacando o papel da escrita como ferramenta criativa e transformadora.',
    tags: ['prêmio', 'trânsito', 'cidadania', 'produção textual'],
    link: 'https://atardeeducacaopremia.atarde.com.br/concursos/detran',
    corPrimaria: '#000000',
    corAccent: '#f8b732',
  },
]
