<script setup lang="ts">
import { eventos } from '~/data/eventos'

useSeoMeta({
  title: 'Eventos — A TARDE Educação',
  description:
    'Encontros de Educação, Concurso Cultural Jovem Jornalista, Prêmio Ecoinovar e workshops temáticos: conheça as iniciativas permanentes do A TARDE Educação.',
})
</script>

<template>
  <div>
    <PageHero
      kicker="Eventos"
      title="Encontros que colocam a educação em movimento."
      text="Ao longo do ano, o A TARDE Educação promove diferentes experiências que ampliam os espaços de aprendizagem, diálogo e participação. São encontros, iniciativas culturais, formações e premiações que aproximam educadores, estudantes e comunidades de temas relevantes para a educação e para a sociedade."
    />

    <section class="ate-section">
      <div class="ate-container">
        <p class="ate-kicker ate-reveal" v-reveal>Iniciativas permanentes</p>
        <div class="ate-eventos-grid">
          <article v-for="(evento, i) in eventos" :key="evento.nome" class="ate-card ate-evento ate-reveal" v-reveal="i * 90">
            <span class="ate-evento__index">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ evento.nome }}</h3>
            <p>{{ evento.texto }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-eventos-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.ate-evento {
  padding: 2rem;
  position: relative;
}
.ate-evento__index {
  font-family: var(--ate-font-display);
  font-size: 2rem;
  color: var(--ate-orange-light);
  display: block;
  margin-bottom: 0.6rem;
}
:root[data-theme='dark'] .ate-evento__index {
  color: rgba(255, 169, 77, 0.35);
}
.ate-evento h3 {
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
}
.ate-evento p {
  font-size: 0.96rem;
}
</style>
