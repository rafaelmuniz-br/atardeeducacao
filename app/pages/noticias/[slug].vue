<script setup lang="ts">
import { noticias } from '~/data/noticias'

const route = useRoute()
const noticia = computed(() => noticias.find((n) => n.slug === route.params.slug))

if (!noticia.value) {
  throw createError({ statusCode: 404, statusMessage: 'Notícia não encontrada' })
}

const relacionadas = computed(() => noticias.filter((n) => n.slug !== noticia.value?.slug).slice(0, 3))

function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

useSeoMeta({
  title: () => `${noticia.value?.titulo} — A TARDE Educação`,
  description: () => noticia.value?.resumo,
})
</script>

<template>
  <div v-if="noticia">
    <section class="ate-noticia-hero" :style="{ background: `linear-gradient(150deg, ${noticia.cor}, ${noticia.cor}99)` }">
      <div class="ate-container">
        <NuxtLink to="/noticias" class="ate-noticia-back">← Voltar para Notícias</NuxtLink>
        <span class="ate-noticia-cat">{{ noticia.categoria }}</span>
        <h1>{{ noticia.titulo }}</h1>
        <time :datetime="noticia.data">{{ formatDate(noticia.data) }}</time>
      </div>
    </section>

    <section class="ate-section">
      <div class="ate-container">
        <div class="ate-noticia-body">
          <p v-for="(par, i) in noticia.corpo" :key="i">{{ par }}</p>
        </div>
      </div>
    </section>

    <section v-if="relacionadas.length" class="ate-section ate-section--alt">
      <div class="ate-container">
        <p class="ate-kicker">Continue lendo</p>
        <div class="ate-news-grid">
          <NewsCard v-for="n in relacionadas" :key="n.slug" :noticia="n" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-noticia-hero {
  padding: var(--ate-space) 0;
  color: #fff;
}
.ate-noticia-back {
  display: inline-block;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.88rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}
.ate-noticia-cat {
  display: inline-block;
  background: rgba(0, 0, 0, 0.22);
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-size: 0.76rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 1rem;
}
.ate-noticia-hero h1 {
  color: #fff;
  font-size: clamp(1.7rem, 4vw, 2.6rem);
  max-width: 820px;
  margin-bottom: 0.8rem;
}
.ate-noticia-hero time {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.ate-noticia-body {
  max-width: 720px;
}
.ate-noticia-body p {
  font-size: 1.05rem;
  margin-bottom: 1.3rem;
  color: var(--ate-ink);
}

.ate-news-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  margin-top: 1.75rem;
}
</style>
