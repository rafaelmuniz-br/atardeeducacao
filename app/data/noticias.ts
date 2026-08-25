// Notícias reais do editoria Educação do Jornal A TARDE
// (https://atarde.com.br/educacao). O site institucional não republica o
// conteúdo — cada card é uma chamada (foto, data, autor, resumo) que leva
// pro artigo original em atarde.com.br, em nova guia. A imagem é carregada
// direto do CDN do atarde.com.br (cdn.atarde.com.br), sem download/rehost
// aqui: evita duplicar conteúdo com direito autoral do jornal e mantém o
// site leve mesmo com muitas notícias.
//
// Puxadas manualmente em 24/08/2026, cobrindo as duas primeiras páginas de
// listagem (23 itens, ~13-24/08/2026) — ver relatório sobre a limitação de
// site estático pra volume alto/automático de notícias (a solução de longo
// prazo, se a equipe quiser automatizar isso sem trabalho manual, é um feed
// alimentando isso via Supabase, não build estático).
export interface Noticia {
  titulo: string
  resumo: string
  autor: string
  data: string
  imagem: string
  linkExterno: string
  tags: string[]
}

export const noticias: Noticia[] = [
  {
    titulo: 'Estudantes de Salvador vão receber novo auxílio; saiba quem pode ganhar',
    resumo: 'Programa da Prefeitura de Salvador busca incentivar a permanência de estudantes da EJA.',
    autor: 'Iarla Queiroz',
    data: '2026-08-24',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/estudantes-de-salvador-vao-receber-novo-auxilio-sa0139959900202608241730/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/estudantes-de-salvador-vao-receber-novo-auxilio-saiba-quem-pode-ganhar-1399599',
    tags: ['EJA', 'auxílio', 'Salvador', 'prefeitura'],
  },
  {
    titulo: 'Professores recebem dicas para cuidar da saúde mental; veja',
    resumo:
      'Especialistas discutem saúde mental e autocuidado de educadores durante a segunda edição do Trampos do Futuro, em São Paulo.',
    autor: 'Loren Beatriz Sousa',
    data: '2026-08-24',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/professores-recebem-dicas-para-cuidar-da-saude-men0139958900202608241630/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/professores-recebem-dicas-para-cuidar-da-saude-mental-veja-1399589',
    tags: ['professores', 'saúde mental', 'bem-estar'],
  },
  {
    titulo: 'Participantes do Encceja 2026 podem pedir reaplicação até 28 de agosto',
    resumo:
      'Quem enfrentou problemas durante a aplicação da prova pode solicitar reaplicação exclusivamente pela Página do Participante.',
    autor: 'Vitória Sacramento',
    data: '2026-08-24',
    imagem:
      'https://cdn.atarde.com.br/img/Editoria-Destaque/1390000/479x386/encceja-2026-aplica-provas-neste-domingo-confira-l0139888800202608171513/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/participantes-do-encceja-2026-podem-pedir-reaplicacao-ate-28-de-agosto-1399567',
    tags: ['Encceja', 'exame', 'certificação'],
  },
  {
    titulo: 'Pernambués ganha novo colégio após investimento de R$ 15 milhões',
    resumo:
      'Colégio Estadual Ministro Aliomar Baleeiro passa a atender cerca de 1.300 estudantes com nove cursos profissionalizantes.',
    autor: 'Loren Beatriz Sousa e Vitória Sacramento',
    data: '2026-08-24',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/pernambues-ganha-novo-colegio-apos-investimento-de0139954700202608241151/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/pernambues-ganha-novo-colegio-apos-investimento-de-r-15-milhoes-1399547',
    tags: ['rede estadual', 'infraestrutura', 'Salvador'],
  },
  {
    titulo: 'Pé-de-Meia começa a ser pago nesta segunda; veja quem tem direito',
    resumo:
      'Parcela de agosto do programa é destinada a estudantes com pelo menos 80% de frequência em maio e junho.',
    autor: 'Luiza Nascimento',
    data: '2026-08-24',
    imagem:
      'https://cdn.atarde.com.br/img/Editoria-Destaque/1390000/479x386/pe-de-meia-comeca-a-ser-pago-nesta-segunda-veja-qu0139950800202608240646/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/pe-de-meia-comeca-a-ser-pago-nesta-segunda-veja-quem-tem-direito-1399508',
    tags: ['Pé-de-Meia', 'MEC', 'benefício'],
  },
  {
    titulo: 'Estudo revela desafios e expectativas dos jovens no mundo do trabalho',
    resumo: 'Levantamento foi apresentado durante o evento "Trampos do Futuro" em São Paulo.',
    autor: 'Loren Beatriz Sousa',
    data: '2026-08-21',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/estudo-revela-desafios-e-expectativas-dos-jovens-n0139934900202608211807/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/estudo-revela-desafios-e-expectativas-dos-jovens-no-mundo-do-trabalho-1399349',
    tags: ['jovens', 'mercado de trabalho', 'educação profissional'],
  },
  {
    titulo: 'Veja filmes que podem ajudar na preparação para o Enem',
    resumo: 'Produções ajudam a reforçar conteúdos e ampliar referências para a prova.',
    autor: 'Vitória Sacramento',
    data: '2026-08-21',
    imagem:
      'https://cdn.atarde.com.br/img/Editoria-Destaque/1390000/479x386/veja-filmes-que-podem-ajudar-na-preparacao-para-o-0139931800202608211253/scaleDownOutsideFillBackground-1.webp',
    linkExterno: 'https://atarde.com.br/educacao/veja-filmes-que-podem-ajudar-na-preparacao-para-o-enem-1399318',
    tags: ['Enem', 'cinema', 'preparação'],
  },
  {
    titulo: 'Itabuna inicia em setembro pagamento de bolsa para alunos da EJA e mães solo',
    resumo: 'Primeiros 81 estudantes aprovados receberão o benefício até o 10º dia útil do mês.',
    autor: 'Vitória Sacramento',
    data: '2026-08-21',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/itabuna-inicia-em-setembro-pagamento-de-bolsa-para0139931100202608211213/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/itabuna-inicia-em-setembro-pagamento-de-bolsa-para-alunos-da-eja-e-maes-solo-1399311',
    tags: ['Itabuna', 'EJA', 'bolsa'],
  },
  {
    titulo: 'Projeto baiano leva tecnologia sustentável a evento nacional em SP',
    resumo: 'Iniciativa foi selecionada para a 2ª edição do Trampos do Futuro.',
    autor: 'Loren Beatriz Sousa',
    data: '2026-08-20',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/projeto-baiano-leva-tecnologia-sustentavel-a-event0139924800202608201821/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/projeto-baiano-leva-tecnologia-sustentavel-a-evento-nacional-em-sp-1399248',
    tags: ['tecnologia', 'sustentabilidade', 'inovação'],
  },
  {
    titulo: 'Estudantes de Salvador são selecionados para intercâmbio em Portugal',
    resumo: 'Ao todo, 15 alunos e um professor da rede pública participam de viagem em novembro.',
    autor: 'Vitória Sacramento',
    data: '2026-08-20',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/estudantes-de-salvador-sao-selecionados-para-inter0139923400202608201617/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/estudantes-de-salvador-sao-selecionados-para-intercambio-em-portugal-1399234',
    tags: ['intercâmbio', 'Portugal', 'rede pública'],
  },
  {
    titulo: 'Estudantes da rede estadual da Bahia lançam livro de poemas e contos',
    resumo: 'Obra foi produzida por 20 integrantes do Colégio Estadual Clarice Santiago.',
    autor: 'Vitória Sacramento',
    data: '2026-08-19',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/estudantes-da-rede-estadual-da-bahia-lancam-livro-0139913600202608191904/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/estudantes-da-rede-estadual-da-bahia-lancam-livro-de-poemas-e-contos-1399136',
    tags: ['literatura', 'rede estadual', 'protagonismo estudantil'],
  },
  {
    titulo: 'Copa de 2027 pode alterar calendário de escolas em Salvador',
    resumo: 'Mudanças devem considerar impacto dos jogos e áreas diretamente afetadas.',
    autor: 'Vitória Sacramento',
    data: '2026-08-19',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/copa-de-2027-pode-alterar-calendario-de-escolas-em0139908200202608191113/scaleDownOutsideFillBackground-1.webp',
    linkExterno: 'https://atarde.com.br/educacao/copa-de-2027-pode-alterar-calendario-de-escolas-em-salvador-1399082',
    tags: ['Copa 2027', 'calendário escolar', 'Salvador'],
  },
  {
    titulo: 'Camaçari abre Jogos Escolares com participação de 4,5 mil estudantes',
    resumo: 'Abertura oficial reuniu estudantes da rede municipal no ginásio da Cidade do Saber, em Camaçari.',
    autor: 'Loren Beatriz Sousa e Vitória Sacramento',
    data: '2026-08-18',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/camacari-abre-jogos-escolares-com-participacao-de-0139902600202608181841/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/camacari-abre-jogos-escolares-com-participacao-de-45-mil-estudantes-1399026',
    tags: ['Camaçari', 'esporte escolar', 'rede municipal'],
  },
  {
    titulo: 'Semana da Alfabetização promove formação de profissionais em Itabuna',
    resumo: 'Semana Municipal da Alfabetização 2026 reúne profissionais envolvidos no processo de alfabetização.',
    autor: 'Redação',
    data: '2026-08-18',
    imagem:
      'https://cdn.atarde.com.br/img/Editoria-Destaque/1390000/479x386/semana-da-alfabetizacao-promove-formacao-de-profis0139899000202608181419/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/semana-da-alfabetizacao-promove-formacao-de-profissionais-em-itabuna-1398990',
    tags: ['alfabetização', 'Itabuna', 'formação'],
  },
  {
    titulo: 'A TARDE Educação participa da Jornada Bett Nordeste 2026',
    resumo: 'Evento em Recife reúne profissionais para discutir tecnologia e práticas pedagógicas.',
    autor: 'Redação',
    data: '2026-08-17',
    imagem:
      'https://cdn.atarde.com.br/img/Editoria-Destaque/1390000/479x386/a-tarde-educacao-participa-da-jornada-bett-nordest0139886700202608171317/scaleDownOutsideFillBackground-1.webp',
    linkExterno: 'https://atarde.com.br/educacao/a-tarde-educacao-participa-da-jornada-bett-nordeste-2026-1398867',
    tags: ['A TARDE Educação', 'tecnologia', 'Bett Nordeste'],
  },
  {
    titulo: 'Estudantes de Camaçari são selecionados para intercâmbio em Lisboa',
    resumo:
      'Cinco estudantes e um professor da rede municipal de Camaçari foram selecionados para intercâmbio cultural em Lisboa, Portugal.',
    autor: 'Loren Beatriz Sousa',
    data: '2026-08-17',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/estudantes-de-camacari-sao-selecionados-para-inter0139889700202608171702/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/estudantes-de-camacari-sao-selecionados-para-intercambio-em-lisboa-1398897',
    tags: ['Camaçari', 'intercâmbio', 'Lisboa'],
  },
  {
    titulo: 'Encceja 2026 aplica provas neste domingo; confira locais',
    resumo: 'Candidatos podem consultar o cartão de confirmação no site do Inep.',
    autor: 'Vitória Sacramento',
    data: '2026-08-17',
    imagem:
      'https://cdn.atarde.com.br/img/Editoria-Destaque/1390000/479x386/encceja-2026-aplica-provas-neste-domingo-confira-l0139888800202608171513/scaleDownOutsideFillBackground-1.webp',
    linkExterno: 'https://atarde.com.br/educacao/encceja-2026-aplica-provas-neste-domingo-confira-locais-1398888',
    tags: ['Encceja', 'Inep', 'exame'],
  },
  {
    titulo: 'Correntina amplia alfabetização e melhora índices da educação',
    resumo: 'Município elevou resultados nos dois ciclos e alcançou 51% de crianças alfabetizadas.',
    autor: 'Redação',
    data: '2026-08-14',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/correntina-amplia-alfabetizacao-e-melhora-indices-0139862900202608141500/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/correntina-amplia-alfabetizacao-e-melhora-indices-da-educacao-1398629',
    tags: ['Correntina', 'alfabetização', 'índices'],
  },
  {
    titulo: 'Escola de Morro do Chapéu cria horta para ensinar alimentação e sustentabilidade',
    resumo: 'Projeto busca estimular hábitos saudáveis e protagonismo infantil.',
    autor: 'Vitória Sacramento',
    data: '2026-08-14',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/escola-de-morro-do-chapeu-cria-horta-para-ensinar-0139862500202608141411/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/escola-de-morro-do-chapeu-cria-horta-para-ensinar-alimentacao-e-sustentabilidade-1398625',
    tags: ['sustentabilidade', 'horta escolar', 'Morro do Chapéu'],
  },
  {
    titulo: 'Professores de Salvador participam de formação sobre leitura e escrita',
    resumo: 'Atividades abordaram produção e interpretação de notícias no ambiente escolar.',
    autor: 'Vitória Sacramento',
    data: '2026-08-14',
    imagem:
      'https://cdn.atarde.com.br/img/Editoria-Destaque/1390000/479x386/professores-de-salvador-participam-de-formacao-sob0139861600202608141243/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/professores-de-salvador-participam-de-formacao-sobre-leitura-e-escrita-1398616',
    tags: ['professores', 'leitura', 'jornal na escola'],
  },
  {
    titulo: 'Prouni: candidatos da 2ª chamada devem comprovar dados até esta sexta',
    resumo: 'Nesta etapa, os alunos devem encaminhar a documentação exigida pelo MEC.',
    autor: 'Alice Paulilo',
    data: '2026-08-14',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/prouni-candidatos-da-2-chamada-devem-comprovar-dad0139859000202608140911/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/prouni-candidatos-da-2-chamada-devem-comprovar-dados-ate-esta-sexta-1398590',
    tags: ['Prouni', 'MEC', 'bolsa'],
  },
  {
    titulo: "Formação do 'Páginas de Aprendizado' reúne professores em Juazeiro",
    resumo: 'Formação discutiu alfabetização e uso do jornal em sala de aula.',
    autor: 'Vitória Sacramento',
    data: '2026-08-13',
    imagem:
      'https://cdn.atarde.com.br/img/Editoria-Destaque/1390000/479x386/formacao-do-paginas-de-aprendizado-reune-professor0139852800202608131604/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/formacao-do-paginas-de-aprendizado-reune-professores-em-juazeiro-1398528',
    tags: ['Juazeiro', 'formação', 'jornal na escola'],
  },
  {
    titulo: 'Formação incentiva uso da arte e da cultura no ensino em Simões Filho',
    resumo: 'Encontro também abordou educomunicação e formação continuada de professores da rede.',
    autor: 'Loren Beatriz Sousa',
    data: '2026-08-13',
    imagem:
      'https://cdn.atarde.com.br/img/Chamada-Home/1390000/479x386/formacao-incentiva-uso-da-arte-e-da-cultura-no-ens0139852500202608131532/scaleDownOutsideFillBackground-1.webp',
    linkExterno:
      'https://atarde.com.br/educacao/formacao-incentiva-uso-da-arte-e-da-cultura-no-ensino-em-simoes-filho-1398525',
    tags: ['Simões Filho', 'educomunicação', 'arte e cultura'],
  },
]
