// Conteúdo placeholder — o cliente indicou manter apenas o depoimento de
// Dora Mônica e ir atualizando aos poucos (ver prompt de desenvolvimento).
// Texto e foto reais dela já enviados pelo cliente.
//
// Os itens "Fulano" abaixo são só pra pré-visualização de layout (pedido
// explícito do cliente pra ver como a grade fica com vários depoimentos) —
// remover antes de publicar de verdade.
//
// Só Dora Mônica tem foto real até agora (recortada em 208x208 a partir do
// arquivo enviado pelo cliente, ver public/depoimentos/). Os "Fulano" de
// teste continuam sem `foto` e caem no avatar de iniciais
// (AvatarInitials.vue) em vez de uma foto de banco de imagens fingindo ser
// a pessoa — só adicionar foto quando for de alguém real.
export interface Depoimento {
  nome: string
  papel: string
  texto: string
  cor: string
  foto?: string
}

export const depoimentos: Depoimento[] = [
  {
    nome: 'Dora Mônica',
    papel: 'Educadora parceira do programa',
    texto:
      'Esse é um evento maravilhoso, porque ele vem contribuir com a temática que hoje é muito solicitada pelos municípios, que são as especificidades dos alunos TEA, alunos com transtorno. Então, tudo o que foi discutido hoje vem agregar tanto para a minha formação, como tenho certeza absoluta que vou conseguir, lá no município, ampliar esses conhecimentos para coordenadores pedagógicos e professores. Esta parceria com o programa A TARDE Educação tem contribuído também para o fomento da leitura e da escrita, nos possibilitando essa formação de excelência, com uma profissional assim, que trouxe muitas reflexões, trouxe elementos de cada área desta, para que a gente possa atuar em sala de aula.',
    cor: '#0972b3',
    foto: '/depoimentos/dora-monica.jpg',
  },
  {
    nome: 'Fulano da Silva',
    papel: 'Professor parceiro do programa',
    texto: 'Blablablabla blablabla blablablabla bla bla. Blablabla blablablabla bla, blablabla bla.',
    cor: '#f58220',
  },
  {
    nome: 'Fulano de Souza',
    papel: 'Coordenador pedagógico',
    texto:
      'Blablablabla blablabla. Blablablabla bla bla blablabla, blablablabla bla bla. Blablabla bla blablablabla bla bla bla blablabla blablablabla.',
    cor: '#075685',
  },
  {
    nome: 'Fulana Santos',
    papel: 'Gestora escolar',
    texto: 'Bla bla blablablabla. Blablablabla bla.',
    cor: '#c65602',
  },
  {
    nome: 'Fulano Pereira',
    papel: 'Estudante da rede parceira',
    texto:
      'Blablablabla bla bla blablabla blablablabla. Bla bla blablablabla bla, blablabla blablablabla bla bla bla. Blablabla bla bla blablablabla blablabla bla bla bla blablablabla.',
    cor: '#1b93dc',
  },
  {
    nome: 'Fulana Oliveira',
    papel: 'Professora parceira do programa',
    texto: 'Blablabla blablablabla bla bla blablablabla bla. Blablablabla bla bla blablabla.',
    cor: '#0e8f6b',
  },
]
