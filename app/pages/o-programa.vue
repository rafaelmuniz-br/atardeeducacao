<script setup lang="ts">
useSeoMeta({
  title: 'O Programa — A TARDE Educação',
  description:
    'Conheça a história, a abordagem e a missão do A TARDE Educação: uma iniciativa pioneira do Jornal A TARDE criada em 1996, reconhecida internacionalmente com o World Young Reader Prize.',
})

const parceiros = ['Rede Estadual de Ensino', 'Prefeituras Parceiras', 'Grupo A TARDE', 'Instituições de Ensino']
</script>

<template>
  <div>
    <PageHero
      kicker="O A TARDE Educação"
      title="Educação, comunicação e conhecimento em diálogo com a escola e com os territórios."
      text="O A TARDE Educação desenvolve projetos, formações e experiências educativas que aproximam informação, conhecimento e prática pedagógica. Sua atuação parte do diálogo com as redes de ensino e considera os diferentes contextos, desafios e possibilidades de cada território."
    />

    <section class="ate-section">
      <div class="ate-container ate-programa__grid">
        <div class="ate-reveal" v-reveal>
          <p class="ate-kicker">Nossa história</p>
          <h2 class="ate-eyebrow-title">Uma história construída com a educação</h2>
        </div>
        <div class="ate-programa__text ate-reveal" v-reveal="100">
          <p>
            O A TARDE Educação é uma iniciativa pioneira do Jornal A TARDE, criada na Bahia em abril de 1996, por
            Renato Simões, com o respaldo do professor Edivaldo Boaventura. Ao longo de sua trajetória, o programa
            consolidou uma atuação voltada à aproximação entre comunicação e educação, reconhecendo a informação
            como possibilidade de aprendizagem e reflexão.
          </p>
          <p>
            A leitura e a produção de mídias na escola estão na origem dessa experiência. Com o tempo, essa atuação
            foi ampliada para diferentes projetos, formações e iniciativas educativas, mantendo como princípios a
            valorização da leitura, da autoria, do pensamento crítico e da participação.
          </p>
          <p>
            Reconhecido internacionalmente com o <strong>World Young Reader Prize</strong>, em 2012, o A TARDE
            Educação construiu uma trajetória marcada pelo diálogo com educadores, estudantes e redes de ensino.
          </p>
          <p>
            Hoje, o programa segue ampliando suas possibilidades de atuação, desenvolvendo iniciativas em parceria
            com municípios e com a rede estadual de ensino e considerando as características e necessidades de cada
            contexto educativo.
          </p>
        </div>
      </div>
    </section>

    <section class="ate-section ate-section--alt">
      <div class="ate-container">
        <div class="ate-reveal" v-reveal style="max-width: 680px; margin-bottom: 2rem">
          <p class="ate-kicker">Nossa abordagem</p>
          <h2 class="ate-eyebrow-title">Aprender também é observar, questionar e construir sentidos.</h2>
        </div>
        <div class="ate-abordagem__grid">
          <p class="ate-reveal" v-reveal="80">
            O A TARDE Educação acredita que aprender também é observar, questionar, relacionar informações e
            construir sentidos sobre o mundo. Por isso, seus projetos e formações aproximam temas contemporâneos do
            cotidiano de estudantes e educadores, criando oportunidades para que a aprendizagem dialogue com a
            realidade e faça sentido em diferentes contextos.
          </p>
          <p class="ate-reveal" v-reveal="160">
            A partir da relação entre educação, comunicação e diferentes linguagens, o programa desenvolve
            experiências que estimulam a leitura, a reflexão, a autoria, o pensamento crítico e a participação.
            Essa perspectiva orienta o trabalho realizado junto às redes parceiras, considerando os objetivos de
            cada projeto, as características dos territórios e os desafios presentes no cotidiano das escolas.
          </p>
        </div>
        <blockquote class="ate-pullquote ate-reveal" v-reveal="220">
          Informação é ponto de partida. Conhecimento é construção. Educação é possibilidade de transformação.
        </blockquote>
      </div>
    </section>

    <section class="ate-section ate-missao">
      <div class="ate-container ate-missao__inner ate-reveal" v-reveal>
        <p class="ate-kicker">Nossa missão</p>
        <h2 class="ate-eyebrow-title">Ampliar possibilidades de aprendizagem por meio da educação e da comunicação</h2>
        <p class="ate-lede" style="margin-top: 1.1rem">
          Contribuir para uma educação que forme leitores, produtores de conhecimento e sujeitos capazes de
          interpretar diferentes realidades, fazer perguntas, construir sentidos e participar da sociedade de forma
          crítica, ética e consciente.
        </p>
        <p class="ate-lede" style="margin-top: 1rem">
          Para isso, o A TARDE Educação aproxima informação, educação e práticas pedagógicas, desenvolvendo
          projetos e formações que fortalecem educadores e estudantes e ampliam as possibilidades de aprendizagem.
        </p>
      </div>
    </section>

    <section class="ate-section ate-section--alt">
      <div class="ate-container">
        <div class="ate-reveal" v-reveal style="max-width: 680px; margin-bottom: 2rem">
          <p class="ate-kicker">Parceiros</p>
          <h2 class="ate-eyebrow-title">Quem caminha junto com o programa</h2>
        </div>
        <div class="ate-parceiros-grid">
          <div v-for="(p, i) in parceiros" :key="p" class="ate-card ate-parceiro ate-reveal" v-reveal="i * 80">
            {{ p }}
          </div>
        </div>
        <p class="ate-parceiros-note">
          * Espaço reservado para as logos oficiais dos parceiros — a equipe do A TARDE Educação deve enviar os
          arquivos em alta resolução para substituir estes espaços reservados.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-programa__grid {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;
}
@media (min-width: 760px) {
  .ate-programa__grid {
    grid-template-columns: 0.8fr 1.2fr;
  }
}
.ate-programa__text p {
  margin-bottom: 1.1rem;
}
.ate-programa__text p:last-child {
  margin-bottom: 0;
}

.ate-abordagem__grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  margin-bottom: 2.5rem;
}
@media (min-width: 760px) {
  .ate-abordagem__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.ate-pullquote {
  margin: 0;
  padding: 2rem clamp(1.5rem, 4vw, 3rem);
  border-left: 4px solid var(--ate-orange);
  font-family: var(--ate-font-display);
  font-size: clamp(1.2rem, 2.6vw, 1.6rem);
  color: var(--ate-blue);
  background: var(--ate-surface);
  border-radius: 0 var(--ate-radius) var(--ate-radius) 0;
}

.ate-missao__inner {
  max-width: 760px;
  text-align: left;
}

.ate-parceiros-grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.ate-parceiro {
  padding: 2.2rem 1.5rem;
  text-align: center;
  color: var(--ate-ink-soft);
  font-weight: 700;
  font-size: 0.9rem;
  border-style: dashed;
}

.ate-parceiros-note {
  margin-top: 1.5rem;
  font-size: 0.82rem;
  color: var(--ate-ink-soft);
  font-style: italic;
}
</style>
