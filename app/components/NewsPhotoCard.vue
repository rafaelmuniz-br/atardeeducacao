<script setup lang="ts">
import type { Noticia } from '~/data/noticias'

defineProps<{ noticia: Noticia }>()

function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}
</script>

<template>
  <a :href="noticia.linkExterno" target="_blank" rel="noopener noreferrer" class="ate-photo-card">
    <img :src="noticia.imagem" :alt="noticia.titulo" loading="lazy" width="479" height="386" />

    <div class="ate-photo-card__caption">
      <time :datetime="noticia.data">{{ formatDate(noticia.data) }} · {{ noticia.autor }}</time>
      <h3>{{ noticia.titulo }}</h3>
      <p>
        {{ noticia.resumo }}
      </p>
      <span class="ate-photo-card__link">
        Ler no A TARDE
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </div>
  </a>
</template>

<style scoped>
.ate-photo-card {
  position: relative;
  display: block;
  overflow: hidden;
  break-inside: avoid;
  margin-bottom: 1.25rem;
  background: var(--ate-bg-alt);
  box-shadow: var(--ate-shadow-sm);
  transition: box-shadow 0.25s ease;
}
.ate-photo-card:hover {
  box-shadow: var(--ate-shadow-md);
}

.ate-photo-card img {
  width: 100%;
  height: auto;
  display: block;
}

/* A foto fica sempre visível, antes e durante o hover — só a legenda
   (faixa na parte de baixo) aparece/some. */
.ate-photo-card__caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--ate-surface);
  padding: 1.3rem 1.4rem 1.5rem;
  transform: translateY(0);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.ate-photo-card:hover .ate-photo-card__caption {
  transform: translateY(100%);
  pointer-events: none;
}

.ate-photo-card__caption time {
  display: block;
  font-size: 0.76rem;
  color: var(--ate-ink-soft);
  margin-bottom: 0.4rem;
}
.ate-photo-card__caption h3 {
  font-size: 1.05rem;
  line-height: 1.3;
  color: var(--ate-ink);
  margin-bottom: 0.5rem;
}
.ate-photo-card__caption p {
  font-size: 0.86rem;
  color: var(--ate-ink-soft);
  line-height: 1.5;
  margin-bottom: 0.7rem;
}

.ate-photo-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--ate-orange-deep);
}
:root[data-theme='dark'] .ate-photo-card__link {
  color: var(--ate-orange);
}
</style>
