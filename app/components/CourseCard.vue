<script setup lang="ts">
import type { Curso } from '~/data/cursos'

defineProps<{ curso: Curso }>()

function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}
</script>

<template>
  <a :href="curso.linkAva" target="_blank" rel="noopener noreferrer" class="ate-card ate-course-card">
    <div class="ate-course-card__cover">
      <img v-if="curso.imagem" :src="curso.imagem" :alt="curso.titulo" loading="lazy" width="900" height="338" />
      <div
        v-else
        class="ate-course-card__placeholder"
        :style="{ background: `linear-gradient(135deg, ${curso.cor}, ${curso.cor}99)` }"
      >
        <svg viewBox="0 0 48 48" width="34" height="34" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M24 8 4 17l20 9 20-9-20-9Z" />
          <path d="M12 21v10c0 2.8 5.8 6 12 6s12-3.2 12-6V21M40 17v13" />
        </svg>
      </div>
      <span class="ate-course-card__tag">{{ curso.tag }}</span>
      <span v-if="curso.placeholder" class="ate-course-card__badge">Em breve</span>
    </div>
    <div class="ate-course-card__body">
      <time :datetime="curso.data">{{ formatDate(curso.data) }}</time>
      <h3>{{ curso.titulo }}</h3>
      <p>{{ curso.descricao }}</p>
      <span class="ate-btn ate-btn--outline ate-btn--sm ate-course-card__cta">
        Acesse o curso
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </div>
  </a>
</template>

<style scoped>
.ate-course-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: var(--ate-card-min-h, auto);
  overflow: hidden;
  color: var(--ate-ink);
}

.ate-course-card__cover {
  position: relative;
  height: 150px;
  overflow: hidden;
  background: var(--ate-bg-alt);
}
.ate-course-card__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}
.ate-course-card:hover .ate-course-card__cover img {
  transform: scale(1.05);
}
.ate-course-card__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ate-course-card__tag {
  position: absolute;
  left: 1.25rem;
  bottom: 1rem;
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: rgba(9, 41, 66, 0.55);
  backdrop-filter: blur(3px);
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
}

.ate-course-card__badge {
  position: absolute;
  right: 0.9rem;
  top: 0.9rem;
  color: #1a1005;
  font-weight: 700;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: var(--ate-orange-light);
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
}

.ate-course-card__body {
  padding: 1.4rem 1.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.ate-course-card__body time {
  font-size: 0.78rem;
  color: var(--ate-ink-soft);
  margin-bottom: 0.5rem;
}
.ate-course-card__body h3 {
  font-size: 1.12rem;
  margin-bottom: 0.6rem;
  line-height: 1.35;
}
.ate-course-card__body p {
  font-size: 0.92rem;
  flex: 1;
  margin-bottom: 1.2rem;
}

.ate-course-card__cta {
  align-self: flex-start;
  pointer-events: none;
}
</style>
