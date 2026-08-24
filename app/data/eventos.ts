export interface Evento {
  nome: string
  resumo: string
  texto: string
}

export const eventos: Evento[] = [
  {
    nome: 'Encontros de Educação',
    resumo: 'Diálogo e formação para educadores, ao longo do ano.',
    texto:
      'Momentos de diálogo e formação que reúnem educadores para refletir sobre temas contemporâneos da educação, compartilhar experiências e ampliar repertórios para a prática pedagógica. Realizados ao longo do ano, os encontros criam espaços de troca entre diferentes sujeitos e contextos educativos.',
  },
  {
    nome: 'Concurso Cultural Jovem Jornalista',
    resumo: 'Estudantes no universo da comunicação e do jornalismo.',
    texto:
      'Uma iniciativa cultural que aproxima estudantes do universo da comunicação e do jornalismo, estimulando leitura, escrita, produção de conteúdo e olhar crítico sobre a realidade. A proposta valoriza a autoria dos jovens e cria oportunidades para que suas vozes encontrem espaço.',
  },
  {
    nome: 'Prêmio Ecoinovar',
    resumo: 'Reconhecimento a projetos de sustentabilidade e inovação.',
    texto:
      'Uma premiação que reconhece iniciativas e projetos que apresentam ideias, práticas e soluções relacionadas à sustentabilidade e à transformação socioambiental. A iniciativa valoriza o protagonismo e a capacidade de criar respostas para desafios presentes no cotidiano.',
  },
  {
    nome: 'Workshops e encontros temáticos',
    resumo: 'Aprofundamento de temas específicos e troca de conhecimentos.',
    texto:
      'Experiências formativas voltadas ao aprofundamento de temas específicos e à troca de conhecimentos. Os workshops integram a estratégia de formação do A TARDE Educação e podem ser realizados em diferentes formatos, de acordo com os objetivos de cada projeto.',
  },
]
