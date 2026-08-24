<script setup lang="ts">
import { noticias } from '~/data/noticias'

useSeoMeta({
  title: 'Notícias — A TARDE Educação',
  description: 'Acompanhe notícias, iniciativas, projetos e temas que fazem parte da atuação do A TARDE Educação.',
})

const categorias = ['Todas', ...new Set(noticias.map((n) => n.categoria))]
const ativa = ref('Todas')

const filtradas = computed(() => (ativa.value === 'Todas' ? noticias : noticias.filter((n) => n.categoria === ativa.value)))
</script>

<template>
  <div>
    <PageHero
      kicker="Notícias"
      title="Informação que acompanha a educação e o mundo."
      text="Acompanhe notícias, iniciativas, projetos e temas que fazem parte da atuação do A TARDE Educação e das discussões que atravessam a escola e a sociedade."
    />

    <section class="ate-section">
      <div class="ate-container">
        <div class="ate-filtros ate-reveal" v-reveal>
          <button
            v-for="cat in categorias"
            :key="cat"
            type="button"
            class="ate-filtro"
            :class="{ 'is-active': ativa === cat }"
            @click="ativa = cat"
          >
            {{ cat }}
          </button>
        </div>

        <TransitionGroup name="ate-news-fade" tag="div" class="ate-news-grid">
          <NewsCard v-for="(n, i) in filtradas" :key="n.slug" :noticia="n" class="ate-reveal" :style="{ transitionDelay: `${(i % 6) * 60}ms` }" v-reveal="0" />
        </TransitionGroup>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-filtros {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2.5rem;
}
.ate-filtro {
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  border: 1px solid var(--ate-line);
  background: var(--ate-surface);
  color: var(--ate-ink-soft);
  font-weight: 600;
  font-size: 0.86rem;
  cursor: pointer;
  transition: all 0.15s ease;
}
.ate-filtro:hover {
  border-color: var(--ate-blue);
  color: var(--ate-blue);
}
.ate-filtro.is-active {
  background: var(--ate-blue);
  border-color: var(--ate-blue);
  color: #fff;
}

.ate-news-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.ate-news-fade-move,
.ate-news-fade-enter-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.ate-news-fade-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.ate-news-fade-leave-active {
  position: absolute;
}
</style>
