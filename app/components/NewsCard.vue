<script setup lang="ts">
import type { Noticia } from '~/data/noticias'

defineProps<{ noticia: Noticia }>()

function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}
</script>

<template>
  <NuxtLink :to="`/noticias/${noticia.slug}`" class="ate-card ate-news-card">
    <div class="ate-news-card__cover" :style="{ background: `linear-gradient(135deg, ${noticia.cor}, ${noticia.cor}cc)` }">
      <span>{{ noticia.categoria }}</span>
    </div>
    <div class="ate-news-card__body">
      <time :datetime="noticia.data">{{ formatDate(noticia.data) }}</time>
      <h3>{{ noticia.titulo }}</h3>
      <p>{{ noticia.resumo }}</p>
      <span class="ate-news-card__link">Veja mais +</span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.ate-news-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: var(--ate-ink);
}

.ate-news-card__cover {
  height: 150px;
  display: flex;
  align-items: flex-end;
  padding: 1rem 1.25rem;
}
.ate-news-card__cover span {
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: rgba(0, 0, 0, 0.22);
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
}

.ate-news-card__body {
  padding: 1.4rem 1.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.ate-news-card__body time {
  font-size: 0.78rem;
  color: var(--ate-ink-soft);
  margin-bottom: 0.5rem;
}
.ate-news-card__body h3 {
  font-size: 1.12rem;
  margin-bottom: 0.6rem;
  line-height: 1.35;
}
.ate-news-card__body p {
  font-size: 0.92rem;
  flex: 1;
  margin-bottom: 1rem;
}
.ate-news-card__link {
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--ate-orange-deep);
}
:root[data-theme='dark'] .ate-news-card__link {
  color: var(--ate-orange);
}
</style>
