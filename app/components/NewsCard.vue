<script setup lang="ts">
import type { Noticia } from '~/data/noticias'

defineProps<{ noticia: Noticia }>()

function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}
</script>

<template>
  <a :href="noticia.linkExterno" target="_blank" rel="noopener noreferrer" class="ate-card ate-news-card">
    <div class="ate-news-card__cover">
      <img :src="noticia.imagem" :alt="noticia.titulo" loading="lazy" width="479" height="386" />
    </div>
    <div class="ate-news-card__body">
      <time :datetime="noticia.data">{{ formatDate(noticia.data) }} · {{ noticia.autor }}</time>
      <h3>{{ noticia.titulo }}</h3>
      <p>{{ noticia.resumo }}</p>
      <span class="ate-news-card__link">
        Ler no A TARDE
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </div>
  </a>
</template>

<style scoped>
.ate-news-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: var(--ate-card-min-h, auto);
  overflow: hidden;
  color: var(--ate-ink);
  border-radius: 0;
}

.ate-news-card__cover {
  position: relative;
  height: 170px;
  overflow: hidden;
  background: var(--ate-bg-alt);
}
.ate-news-card__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}
.ate-news-card:hover .ate-news-card__cover img {
  transform: scale(1.05);
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
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--ate-orange-deep);
}
:root[data-theme='dark'] .ate-news-card__link {
  color: var(--ate-orange);
}
</style>
