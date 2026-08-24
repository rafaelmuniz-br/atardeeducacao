export interface Eixo {
  slug: string
  nome: string
  resumo: string
  texto: string
  icone: 'jornal' | 'financeira' | 'socioambiental' | 'midiatica' | 'sociedade' | 'empreendedorismo' | 'socioemocional'
}

export const eixos: Eixo[] = [
  {
    slug: 'jornal-na-escola',
    nome: 'Jornal na Escola',
    resumo: 'Conteúdo jornalístico como ponto de partida para aprender.',
    texto:
      'A informação pode ser ponto de partida para aprender. Este eixo aproxima conteúdos jornalísticos e práticas educativas, estimulando leitura, interpretação, produção de sentidos e diálogo com temas presentes na sociedade. A proposta é transformar o contato com a informação em oportunidade para desenvolver pensamento crítico, autoria e participação.',
    icone: 'jornal',
  },
  {
    slug: 'educacao-financeira',
    nome: 'Educação Financeira',
    resumo: 'Conhecimento e atitudes para escolhas mais conscientes.',
    texto:
      'Educação financeira é também educação para escolhas. O eixo propõe trabalhar conhecimentos e atitudes relacionados ao uso consciente de recursos, planejamento, consumo, prioridades e tomada de decisões, conectando esses temas ao cotidiano dos estudantes e à construção de autonomia.',
    icone: 'financeira',
  },
  {
    slug: 'socioambiental',
    nome: 'Socioambiental',
    resumo: 'Sustentabilidade, território e cidadania no cotidiano escolar.',
    texto:
      'As questões ambientais fazem parte da vida cotidiana e exigem conhecimento, responsabilidade e participação. O eixo socioambiental aproxima sustentabilidade, território e cidadania do cotidiano educativo, estimulando a compreensão das relações entre sociedade, natureza e modos de vida e favorecendo a construção de atitudes responsáveis.',
    icone: 'socioambiental',
  },
  {
    slug: 'midiatica',
    nome: 'Midiática / Tecnologia e Mídia',
    resumo: 'Leitura crítica de mídias e produção responsável no digital.',
    texto:
      'Viver em uma sociedade conectada exige mais do que saber acessar informação: é preciso compreender, avaliar e produzir conteúdos. Este eixo trabalha a relação crítica com mídias e tecnologias, fortalecendo leitura de diferentes linguagens, análise de informações, produção de conteúdos e participação responsável no ambiente digital.',
    icone: 'midiatica',
  },
  {
    slug: 'sociedade',
    nome: 'Sociedade',
    resumo: 'Diversidade, convivência, direitos e participação.',
    texto:
      'A escola também é espaço para compreender o mundo social. Este eixo aproxima questões sociais, culturais e cidadãs do processo educativo, criando oportunidades para refletir sobre diversidade, convivência, direitos, participação e os diferentes contextos que atravessam a vida em sociedade.',
    icone: 'sociedade',
  },
  {
    slug: 'empreendedorismo',
    nome: 'Empreendedorismo',
    resumo: 'Iniciativa, criatividade e protagonismo diante de desafios reais.',
    texto:
      'Empreender, no campo educacional, também significa identificar possibilidades, criar, planejar e transformar ideias em ações. O eixo estimula iniciativa, criatividade, colaboração, resolução de problemas e protagonismo, valorizando processos de aprendizagem que ajudam estudantes a pensar e agir diante de desafios reais.',
    icone: 'empreendedorismo',
  },
  {
    slug: 'socioemocional',
    nome: 'Socioemocional',
    resumo: 'Autoconhecimento, empatia, diálogo e colaboração.',
    texto:
      'Aprender envolve relações, emoções, escolhas e convivência. O eixo socioemocional contribui para que a escola trabalhe aspectos como autoconhecimento, empatia, diálogo, colaboração, responsabilidade e manejo de situações do cotidiano, reconhecendo que o desenvolvimento integral também passa pela dimensão emocional e relacional.',
    icone: 'socioemocional',
  },
]
