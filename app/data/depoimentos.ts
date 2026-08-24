// Conteúdo placeholder — o cliente indicou manter apenas o depoimento de
// Dora Mônica e ir atualizando aos poucos (ver prompt de desenvolvimento).
// Texto genérico até o cliente enviar a citação real.
export interface Depoimento {
  nome: string
  papel: string
  texto: string
}

export const depoimentos: Depoimento[] = [
  {
    nome: 'Dora Mônica',
    papel: 'Educadora parceira do programa',
    texto:
      'O A TARDE Educação transformou a forma como eu e meus alunos nos relacionamos com a informação. As formações trouxeram novas ferramentas para a sala de aula e os projetos deram aos estudantes um espaço real para ler, questionar e se expressar.',
  },
]
