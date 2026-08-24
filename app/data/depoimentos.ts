// Conteúdo placeholder — o cliente indicou manter apenas o depoimento de
// Dora Mônica e ir atualizando aos poucos (ver prompt de desenvolvimento).
// Texto genérico até o cliente enviar a citação real.
//
// Os itens "Fulano" abaixo são só pra pré-visualização de layout (pedido
// explícito do cliente pra ver como a grade fica com vários depoimentos) —
// remover antes de publicar de verdade.
//
// Nenhum item tem foto real (nem Dora Mônica, nem os "Fulano" de teste) —
// por isso todos usam avatar de iniciais (AvatarInitials.vue) em vez de uma
// foto de banco de imagens fingindo ser a pessoa. Quando o cliente mandar
// fotos reais, trocar por um campo `foto` com o caminho do arquivo.
export interface Depoimento {
  nome: string
  papel: string
  texto: string
  cor: string
}

export const depoimentos: Depoimento[] = [
  {
    nome: 'Dora Mônica',
    papel: 'Educadora parceira do programa',
    texto:
      'O A TARDE Educação transformou a forma como eu e meus alunos nos relacionamos com a informação. As formações trouxeram novas ferramentas para a sala de aula e os projetos deram aos estudantes um espaço real para ler, questionar e se expressar.',
    cor: '#0972b3',
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
