// Conteúdo placeholder — o site antigo tinha só notícias de teste
// ("Noticia teste 1", texto "gerado automaticamente" etc). Os itens abaixo
// seguem o mesmo formato (categoria, capa, resumo, data) para já deixar a
// listagem, o cartão e a página de notícia funcionando de ponta a ponta;
// eles devem ser substituídos pelo conteúdo real da equipe de jornalismo
// assim que definido (ver relatório — indicação futura de CMS via
// Supabase para a equipe publicar direto).
export interface Noticia {
  slug: string
  categoria: string
  titulo: string
  resumo: string
  corpo: string[]
  data: string
  cor: string
}

export const noticias: Noticia[] = [
  {
    slug: 'formacao-continuada-amplia-repertorio-de-professores',
    categoria: 'Formação',
    titulo: 'Formação continuada amplia repertório de professores da rede parceira',
    resumo:
      'Encontro reuniu educadores para trocar experiências sobre o uso do jornal como recurso pedagógico em sala de aula.',
    corpo: [
      'Educadores de municípios parceiros participaram de um novo encontro de formação continuada do A TARDE Educação, com foco em práticas de leitura crítica e uso do jornal como recurso pedagógico.',
      'Ao longo do encontro, professores trocaram experiências sobre projetos já desenvolvidos em sala de aula e discutiram formas de aproximar o conteúdo jornalístico do cotidiano dos estudantes.',
      'A formação integra o calendário permanente de Encontros de Educação do programa, realizados ao longo do ano em diferentes territórios.',
    ],
    data: '2026-06-12',
    cor: '#0972b3',
  },
  {
    slug: 'jovem-jornalista-2026-inscricoes-abertas',
    categoria: 'Concurso',
    titulo: 'Concurso Jovem Jornalista abre inscrições para estudantes da rede parceira',
    resumo:
      'Iniciativa estimula estudantes a produzir textos, fotorreportagens e vídeos sobre temas relevantes para suas comunidades.',
    corpo: [
      'Estão abertas as inscrições para uma nova edição do Concurso Cultural Jovem Jornalista, iniciativa que aproxima estudantes do universo da comunicação e do jornalismo.',
      'Podem participar estudantes das escolas parceiras do programa, que devem produzir conteúdos autorais sobre temas relevantes para suas comunidades, dentro dos critérios definidos pela organização.',
      'Os trabalhos selecionados recebem destaque nos canais do A TARDE Educação e concorrem à premiação final.',
    ],
    data: '2026-05-28',
    cor: '#f58220',
  },
  {
    slug: 'premio-ecoinovar-projetos-socioambientais',
    categoria: 'Sustentabilidade',
    titulo: 'Prêmio Ecoinovar reconhece projetos socioambientais de escolas parceiras',
    resumo:
      'Iniciativas de estudantes e educadores voltadas à sustentabilidade e à transformação socioambiental foram premiadas.',
    corpo: [
      'O Prêmio Ecoinovar reconheceu projetos desenvolvidos por escolas parceiras com foco em sustentabilidade, território e transformação socioambiental.',
      'As iniciativas premiadas nasceram de atividades ligadas ao eixo Socioambiental do programa, que estimula a compreensão das relações entre sociedade, natureza e modos de vida.',
      'Mais informações sobre a próxima edição serão divulgadas nos canais oficiais do A TARDE Educação.',
    ],
    data: '2026-04-30',
    cor: '#0e8f6b',
  },
  {
    slug: 'educacao-financeira-nas-escolas',
    categoria: 'Educação Financeira',
    titulo: 'Educação financeira ganha espaço nas escolas da rede parceira',
    resumo:
      'Atividades do eixo Educação Financeira trabalham consumo consciente e planejamento com estudantes do ensino fundamental.',
    corpo: [
      'Escolas parceiras do A TARDE Educação têm desenvolvido atividades voltadas à educação financeira, com foco em consumo consciente, planejamento e tomada de decisões.',
      'As propostas conectam esses temas ao cotidiano dos estudantes, estimulando autonomia e pensamento crítico diante de escolhas do dia a dia.',
      'A ação integra o eixo Educação Financeira, uma das sete frentes de atuação do programa.',
    ],
    data: '2026-04-09',
    cor: '#1b93dc',
  },
  {
    slug: 'workshop-midias-digitais-educadores',
    categoria: 'Tecnologia e Mídia',
    titulo: 'Workshop discute leitura crítica de mídias digitais com educadores',
    resumo:
      'Encontro formativo tratou de análise de informação, produção de conteúdo e participação responsável no ambiente digital.',
    corpo: [
      'O A TARDE Educação promoveu um novo workshop temático voltado à relação crítica com mídias e tecnologias.',
      'Educadores participantes discutiram estratégias para trabalhar leitura de diferentes linguagens, análise de informações e produção de conteúdo com os estudantes.',
      'O encontro integra a agenda de Workshops e encontros temáticos do programa, realizados ao longo do ano em diferentes formatos.',
    ],
    data: '2026-03-18',
    cor: '#7b5cf0',
  },
  {
    slug: 'encontro-educacao-abre-calendario-2026',
    categoria: 'Formação',
    titulo: 'Encontro de Educação abre calendário de formações de 2026',
    resumo:
      'Primeira edição do ano reuniu coordenadores pedagógicos das redes parceiras em Salvador.',
    corpo: [
      'O A TARDE Educação abriu o calendário de formações de 2026 com um Encontro de Educação voltado a coordenadores pedagógicos das redes parceiras.',
      'A programação incluiu apresentação dos eixos de atuação do ano e espaço para troca de experiências entre os participantes.',
      'Novas datas de formação serão divulgadas ao longo do ano nos canais oficiais do programa.',
    ],
    data: '2026-02-20',
    cor: '#0972b3',
  },
]
