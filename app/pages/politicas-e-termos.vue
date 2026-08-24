<script setup lang="ts">
useSeoMeta({
  title: 'Políticas e Termos — A TARDE Educação',
  description: 'Política de Privacidade, Termos de Uso e Aviso de Cookies do site do A TARDE Educação.',
})

interface Clausula {
  titulo: string
  texto?: string
  lista?: string[]
}

const secoes = [
  { id: 'privacidade', label: 'Política de Privacidade' },
  { id: 'termos', label: 'Termos de Uso' },
  { id: 'cookies', label: 'Aviso de Cookies' },
]

const privacidade: Clausula[] = [
  {
    titulo: '1. Coleta de Dados Pessoais',
    texto:
      'Este site não exige cadastro, login ou inscrição para navegação. Coletamos dados pessoais apenas quando você opta por entrar em contato conosco, por meio do formulário disponível na página Fale Conosco — nesse caso, solicitamos nome, e-mail, assunto e a mensagem que você deseja enviar. Não coletamos CPF, data de nascimento ou outros dados sensíveis.',
  },
  {
    titulo: '2. Finalidade do Tratamento de Dados',
    texto:
      'Os dados pessoais fornecidos pelo formulário de contato são usados exclusivamente para responder à sua mensagem e dar andamento ao seu pedido de contato, parceria ou informação. Não utilizamos esses dados para fins comerciais nem os compartilhamos com terceiros, exceto quando necessário para o cumprimento de obrigações legais.',
  },
  {
    titulo: '3. Segurança dos Dados',
    texto:
      'Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acessos não autorizados, perda, destruição ou alteração. Utilizamos tecnologias seguras e procedimentos rigorosos para garantir a confidencialidade e a integridade das informações coletadas.',
  },
  {
    titulo: '4. Direitos dos Titulares de Dados',
    texto:
      'Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de seus dados pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco pelos canais disponibilizados no site. Nos comprometemos a responder às suas solicitações de forma rápida e eficaz.',
  },
  {
    titulo: '5. Retenção de Dados',
    texto:
      'Os dados pessoais serão mantidos apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados ou conforme exigido por lei. Após esse período, os dados serão devidamente descartados ou anonimizados.',
  },
  {
    titulo: '6. Alterações na Política de Privacidade',
    texto:
      'Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças na legislação ou em nossas práticas de tratamento de dados. Qualquer alteração será publicada nesta página.',
  },
  {
    titulo: '7. Contato',
    texto:
      'Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato pelo e-mail educacaoatarde@gmail.com.',
  },
]

const termos: Clausula[] = [
  {
    titulo: '1. Aceitação dos Termos',
    texto:
      'Ao acessar e navegar neste site, você concorda em cumprir e respeitar as disposições deste Termo de Uso. Caso não concorde com alguma parte deste Termo, solicitamos que não utilize o site.',
  },
  {
    titulo: '2. Coleta e Tratamento de Dados Pessoais',
    texto:
      'Os únicos dados pessoais tratados neste site são os fornecidos voluntariamente por você através do formulário de contato (nome, e-mail, assunto e mensagem). Esses dados são tratados em conformidade com a LGPD e utilizados exclusivamente para responder ao seu contato.',
  },
  {
    titulo: '3. Direitos dos Titulares de Dados',
    texto:
      'Em conformidade com a LGPD, você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de seus dados pessoais a qualquer momento, através dos canais indicados no site.',
  },
  {
    titulo: '4. Segurança e Proteção dos Dados',
    texto:
      'Implementamos medidas de segurança adequadas para proteger seus dados pessoais contra acessos não autorizados, perda, destruição ou alteração, utilizando tecnologias seguras para garantir a confidencialidade e integridade das informações fornecidas.',
  },
  {
    titulo: '5. Uso de Conteúdo e Propriedade Intelectual',
    texto:
      'Todo o conteúdo disponível neste site — textos, imagens, logotipos, vídeos e demais materiais — é de propriedade do A TARDE Educação/Grupo A TARDE ou de seus licenciadores. Você está autorizado a utilizar este conteúdo apenas para fins pessoais e educacionais. Qualquer reprodução, distribuição, modificação ou uso comercial sem autorização expressa é proibido.',
  },
  {
    titulo: '6. Conduta dos Usuários',
    texto: 'Ao utilizar este site, você se compromete a não:',
    lista: [
      'Violar qualquer legislação aplicável ou os direitos de terceiros;',
      'Utilizar o site para fins ilegais ou não autorizados;',
      'Enviar informações falsas ou enganosas através do formulário de contato;',
      'Comprometer a segurança ou a integridade do site.',
    ],
  },
  {
    titulo: '7. Limitação de Responsabilidade',
    texto:
      'O A TARDE Educação não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da incapacidade de uso deste site, incluindo, mas não se limitando a, erros, omissões, interrupções ou falhas técnicas.',
  },
  {
    titulo: '8. Alterações nos Termos de Uso',
    texto:
      'Podemos modificar este Termo de Uso a qualquer momento. Qualquer alteração será publicada nesta página, e o uso continuado do site após tais mudanças constitui sua aceitação dos novos termos.',
  },
  {
    titulo: '9. Lei Aplicável e Foro',
    texto:
      'Este Termo de Uso é regido pelas leis da República Federativa do Brasil. Qualquer disputa decorrente deste Termo será submetida ao foro da comarca de Salvador-BA, com exclusão de qualquer outro, por mais privilegiado que seja.',
  },
  {
    titulo: '10. Contato',
    texto: 'Se você tiver dúvidas sobre este Termo de Uso, entre em contato pelo e-mail educacaoatarde@gmail.com.',
  },
]

const cookies: Clausula[] = [
  {
    titulo: '1. O que são cookies',
    texto:
      'Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, smartphone, tablet) quando você visita um site, usados para lembrar preferências ou coletar informações sobre a navegação.',
  },
  {
    titulo: '2. O que este site armazena hoje',
    texto:
      'Atualmente, este site não utiliza cookies de rastreamento, publicidade ou análise de audiência. A única informação técnica guardada no seu navegador é a sua preferência de tema (claro ou escuro), armazenada localmente (via localStorage) apenas no seu próprio dispositivo — essa informação nunca é enviada a nenhum servidor nem compartilhada com terceiros.',
  },
  {
    titulo: '3. Serviços de terceiros incorporados',
    texto:
      'A página de Contato incorpora um mapa do Google (Google Maps), que pode definir seus próprios cookies conforme a política de privacidade do Google. Recomendamos consultar diretamente a política de privacidade do Google para mais informações sobre esse serviço.',
  },
  {
    titulo: '4. Alterações futuras',
    texto:
      'Caso este site passe a utilizar cookies de análise de audiência (como Google Analytics) ou publicidade no futuro, este Aviso de Cookies será atualizado e um banner de consentimento será implementado, conforme exigido pela LGPD.',
  },
  {
    titulo: '5. Gestão de preferências',
    texto:
      'Você pode limpar os dados armazenados localmente pelo site (incluindo a preferência de tema) a qualquer momento, pelas configurações de privacidade do seu navegador.',
  },
  {
    titulo: '6. Contato',
    texto: 'Se você tiver dúvidas sobre este Aviso de Cookies, entre em contato pelo e-mail educacaoatarde@gmail.com.',
  },
]

// Diferente da Área de Atuação (um item aberto por vez): aqui várias
// cláusulas podem ficar abertas ao mesmo tempo, já que são independentes
// entre si — o visitante pode querer comparar duas cláusulas lado a lado.
const abertos = ref<Set<string>>(new Set())
function toggle(id: string) {
  const next = new Set(abertos.value)
  next.has(id) ? next.delete(id) : next.add(id)
  abertos.value = next
}
</script>

<template>
  <div>
    <PageHero
      kicker="Políticas e Termos"
      title="Política de Privacidade, Termos de Uso e Aviso de Cookies"
      text="Última atualização: agosto de 2026. Este site é mantido pelo A TARDE Educação, programa do Grupo A TARDE."
    />

    <section class="ate-section ate-legal-nav-section">
      <div class="ate-container">
        <nav class="ate-legal-nav" aria-label="Navegação das políticas">
          <a v-for="s in secoes" :key="s.id" :href="`#${s.id}`" class="ate-legal-pill">{{ s.label }}</a>
        </nav>
      </div>
    </section>

    <section id="privacidade" class="ate-section ate-legal-section">
      <div class="ate-container ate-legal-text">
        <h2 class="ate-eyebrow-title">Política de Privacidade</h2>
        <p class="ate-legal-intro">
          O A TARDE Educação valoriza a privacidade de quem visita este site e está comprometido em proteger os
          dados pessoais eventualmente coletados. Esta Política de Privacidade explica como tratamos as
          informações que você nos fornece, em conformidade com a Lei Geral de Proteção de Dados
          (Lei nº 13.709/2018 — LGPD).
        </p>

        <div class="ate-legal-accordion">
          <div v-for="c in privacidade" :key="c.titulo" class="ate-reveal" v-reveal>
            <AccordionItem :title="c.titulo" :open="abertos.has(`privacidade-${c.titulo}`)" @toggle="toggle(`privacidade-${c.titulo}`)">
              <p v-if="c.texto">{{ c.texto }}</p>
              <ul v-if="c.lista" class="ate-legal-list">
                <li v-for="item in c.lista" :key="item">{{ item }}</li>
              </ul>
            </AccordionItem>
          </div>
        </div>
      </div>
    </section>

    <section id="termos" class="ate-section ate-legal-section ate-section--alt">
      <div class="ate-container ate-legal-text">
        <h2 class="ate-eyebrow-title">Termos de Uso do Site</h2>
        <p class="ate-legal-intro">
          Este Termo de Uso rege a utilização deste site institucional do A TARDE Educação. Ao acessar e utilizar
          este site, você concorda com os termos e condições descritos abaixo, em conformidade com a Lei Geral de
          Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
        </p>

        <div class="ate-legal-accordion">
          <div v-for="c in termos" :key="c.titulo" class="ate-reveal" v-reveal>
            <AccordionItem :title="c.titulo" :open="abertos.has(`termos-${c.titulo}`)" @toggle="toggle(`termos-${c.titulo}`)">
              <p v-if="c.texto">{{ c.texto }}</p>
              <ul v-if="c.lista" class="ate-legal-list">
                <li v-for="item in c.lista" :key="item">{{ item }}</li>
              </ul>
            </AccordionItem>
          </div>
        </div>
      </div>
    </section>

    <section id="cookies" class="ate-section ate-legal-section">
      <div class="ate-container ate-legal-text">
        <h2 class="ate-eyebrow-title">Aviso de Cookies</h2>
        <p class="ate-legal-intro">Saiba como este site trata dados de navegação e preferências técnicas.</p>

        <div class="ate-legal-accordion">
          <div v-for="c in cookies" :key="c.titulo" class="ate-reveal" v-reveal>
            <AccordionItem :title="c.titulo" :open="abertos.has(`cookies-${c.titulo}`)" @toggle="toggle(`cookies-${c.titulo}`)">
              <p v-if="c.texto">{{ c.texto }}</p>
              <ul v-if="c.lista" class="ate-legal-list">
                <li v-for="item in c.lista" :key="item">{{ item }}</li>
              </ul>
            </AccordionItem>
          </div>
        </div>
      </div>
    </section>

    <section class="ate-section ate-legal-footer">
      <div class="ate-container ate-legal-text">
        <p class="ate-legal-entity">
          A TARDE Educação é um programa do Grupo A TARDE, mantido por Empresa Editora A TARDE S.A. — CNPJ
          15.111.297/0001-30 — Rua Professor Milton Cayres de Brito, 204, Caminho das Árvores, Salvador-BA,
          41820-570.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-legal-nav-section {
  padding-top: 2.5rem;
  padding-bottom: 0;
}
.ate-legal-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.ate-legal-pill {
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  border: 1px solid var(--ate-line);
  background: var(--ate-surface);
  color: var(--ate-ink-soft);
  font-weight: 600;
  font-size: 0.86rem;
  transition: all 0.15s ease;
}
.ate-legal-pill:hover {
  border-color: var(--ate-blue);
  color: var(--ate-blue);
}

.ate-legal-section {
  scroll-margin-top: 90px;
}

.ate-legal-text h2 {
  margin-bottom: 1.1rem;
}
.ate-legal-intro {
  margin-bottom: 2rem;
}
.ate-legal-text a {
  color: var(--ate-blue);
  font-weight: 600;
}

.ate-legal-accordion {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 820px;
}

.ate-legal-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem 0 0;
  padding-left: 1.3rem;
}
.ate-legal-list li {
  list-style: disc;
  color: var(--ate-ink-soft);
  line-height: 1.65;
}

.ate-legal-footer {
  padding-top: 0;
}
.ate-legal-entity {
  font-size: 0.85rem;
  color: var(--ate-ink-soft);
  border-top: 1px solid var(--ate-line);
  padding-top: 1.5rem;
}
</style>
