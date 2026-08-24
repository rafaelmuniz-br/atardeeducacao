<script setup lang="ts">
useSeoMeta({
  title: 'Galeria — A TARDE Educação',
  description: 'Fotos e vídeos das ações, formações e eventos do A TARDE Educação.',
})

const tab = ref<'fotos' | 'videos'>('fotos')

// Placeholder — o site antigo tinha vídeos/fotos de teste, removidos aqui
// conforme pedido do cliente ("remover todos os vídeos e fotos testes").
// Os blocos abaixo marcam os espaços reservados até a equipe (ver nota
// "verificar com Louise" no material enviado) enviar o material real.
const itens = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  cor: ['#0972b3', '#f58220', '#1b93dc', '#0e8f6b'][i % 4],
}))
</script>

<template>
  <div>
    <PageHero kicker="Galeria" title="Fotos e vídeos do A TARDE Educação" />

    <section class="ate-section">
      <div class="ate-container">
        <div class="ate-filtros ate-reveal" v-reveal>
          <button type="button" class="ate-filtro" :class="{ 'is-active': tab === 'fotos' }" @click="tab = 'fotos'">Fotos</button>
          <button type="button" class="ate-filtro" :class="{ 'is-active': tab === 'videos' }" @click="tab = 'videos'">Vídeos</button>
        </div>

        <div class="ate-galeria-grid">
          <div v-for="(item, i) in itens" :key="item.id" class="ate-galeria-item ate-reveal" v-reveal="(i % 4) * 70" :style="{ background: `linear-gradient(150deg, ${item.cor}, ${item.cor}88)` }">
            <svg v-if="tab === 'fotos'" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" stroke-width="1.8">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <circle cx="9" cy="10.5" r="2" />
              <path d="m21 16-5.5-5-9.5 8" />
            </svg>
            <svg v-else viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" stroke-width="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M10 8.5v7l6-3.5Z" fill="#fff" stroke="none" />
            </svg>
          </div>
        </div>

        <p class="ate-galeria-note">
          * Espaço reservado para as fotos e vídeos reais das ações do A TARDE Educação — a equipe deve enviar o
          material em alta resolução para substituir estes blocos.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-filtros {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 2rem;
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
.ate-filtro.is-active {
  background: var(--ate-blue);
  border-color: var(--ate-blue);
  color: #fff;
}

.ate-galeria-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
}
.ate-galeria-item {
  aspect-ratio: 1;
  border-radius: var(--ate-radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
}
.ate-galeria-item:hover {
  transform: scale(1.03);
}

.ate-galeria-note {
  margin-top: 1.75rem;
  font-size: 0.82rem;
  color: var(--ate-ink-soft);
  font-style: italic;
}
</style>
