<script setup lang="ts">
import { noticias } from '~/data/noticias'

useSeoMeta({
  title: 'Notícias — A TARDE Educação',
  description: 'Acompanhe notícias, iniciativas, projetos e temas que fazem parte da atuação do A TARDE Educação.',
})

const categorias = ['Todas', ...new Set(noticias.map((n) => n.categoria))]
const ativa = ref('Todas')
const busca = ref('')

const filtradas = computed(() =>
  noticias.filter((n) => {
    const naCategoria = ativa.value === 'Todas' || n.categoria === ativa.value
    const naBusca = matchesSearch(busca.value, n.titulo, n.tags, n.categoria)
    return naCategoria && naBusca
  })
)
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
        <div class="ate-toolbar ate-reveal" v-reveal>
          <SearchInput v-model="busca" placeholder="Buscar por título ou tema..." />
          <div class="ate-filtros">
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
        </div>

        <div v-if="filtradas.length" class="ate-news-grid">
          <div v-for="(n, i) in filtradas" :key="n.slug" class="ate-reveal" :style="{ transitionDelay: `${(i % 6) * 60}ms` }" v-reveal="0">
            <NewsCard :noticia="n" />
          </div>
        </div>
        <p v-else class="ate-empty">Nenhuma notícia encontrada para essa busca.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2.5rem;
}
.ate-filtros {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.ate-empty {
  padding: 3rem 1rem;
  text-align: center;
  color: var(--ate-ink-soft);
  border: 1px dashed var(--ate-line);
  border-radius: var(--ate-radius);
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
</style>
