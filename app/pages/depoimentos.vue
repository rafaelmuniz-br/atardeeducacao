<script setup lang="ts">
import { depoimentos } from '~/data/depoimentos'

useSeoMeta({
  title: 'Depoimentos — A TARDE Educação',
  description: 'Relatos de educadores, gestores e estudantes que vivem as ações do A TARDE Educação.',
})
</script>

<template>
  <div>
    <PageHero
      kicker="Depoimentos"
      title="Quem vive a educação também ajuda a contar essa história."
      text="As experiências de educadores, gestores e estudantes revelam o que acontece quando formação, conhecimento e prática se encontram. Nesta área, reunimos relatos de quem participa das ações do A TARDE Educação e leva novas reflexões para seus contextos."
    />

    <section class="ate-section">
      <div class="ate-container ate-depoimentos-wrap">
        <article
          v-for="(dep, i) in depoimentos"
          :key="dep.nome"
          class="ate-card ate-depoimento ate-reveal"
          v-reveal="i * 90"
        >
          <svg class="ate-depoimento__quote" viewBox="0 0 32 24" width="34" height="26" fill="currentColor">
            <path d="M0 24V13.6C0 5.6 4.9 0.8 12.6 0v4.9c-4.2.7-6.6 3.3-6.6 6.8H12v12.3H0Zm18 0V13.6c0-8 4.9-12.8 12.6-13.6v4.9c-4.2.7-6.6 3.3-6.6 6.8H30v12.3H18Z" />
          </svg>
          <p class="ate-depoimento__texto">{{ dep.texto }}</p>
          <footer>
            <strong>{{ dep.nome }}</strong>
            <span>{{ dep.papel }}</span>
          </footer>
        </article>

        <div class="ate-depoimentos-empty ate-reveal" v-reveal="depoimentos.length * 90">
          <p>Novos depoimentos serão adicionados aqui em breve.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-depoimentos-wrap {
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.ate-depoimento {
  padding: clamp(2rem, 4vw, 3rem);
}
.ate-depoimento__quote {
  color: var(--ate-orange-light);
  margin-bottom: 1rem;
}
:root[data-theme='dark'] .ate-depoimento__quote {
  color: rgba(255, 169, 77, 0.4);
}
.ate-depoimento__texto {
  font-family: var(--ate-font-display);
  font-size: 1.25rem;
  color: var(--ate-ink);
  line-height: 1.55;
  margin-bottom: 1.5rem;
}
.ate-depoimento footer {
  display: flex;
  flex-direction: column;
}
.ate-depoimento footer strong {
  color: var(--ate-blue);
}
.ate-depoimento footer span {
  font-size: 0.88rem;
  color: var(--ate-ink-soft);
}

.ate-depoimentos-empty {
  border: 1px dashed var(--ate-line);
  border-radius: var(--ate-radius);
  padding: 1.75rem;
  text-align: center;
  color: var(--ate-ink-soft);
  font-style: italic;
}
</style>
