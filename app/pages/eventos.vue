<script setup lang="ts">
import { eventos } from '~/data/eventos'

useSeoMeta({
  title: 'Eventos — A TARDE Educação',
  description:
    'Concurso Cultural Jovem Jornalista, Prêmio Ecoinovar e Prêmio Trânsito de Ideias: conheça as premiações e concursos culturais do A TARDE Educação.',
})

const busca = ref('')
const filtrados = computed(() => eventos.filter((e) => matchesSearch(busca.value, e.nome, e.tags, e.resumo)))

// Em telas sem mouse não existe ":hover" real. Nesse caso a troca de
// conteúdo <-> foto passa a ser por toque: primeiro clique mostra a foto
// (mesmo estado visual do hover), segundo clique — com o card já ativo —
// ou um clique fora navega/fecha.
const eventoAtivo = ref<number | null>(null)
const gridRef = ref<HTMLElement | null>(null)
let temHover = true

function aoClicarCard(e: MouseEvent, i: number) {
  if (temHover) return
  if (eventoAtivo.value !== i) {
    e.preventDefault()
    eventoAtivo.value = i
  }
}

function aoClicarFora(e: MouseEvent) {
  if (temHover || eventoAtivo.value === null) return
  if (gridRef.value && !gridRef.value.contains(e.target as Node)) {
    eventoAtivo.value = null
  }
}

onMounted(() => {
  temHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  document.addEventListener('click', aoClicarFora)
})
onUnmounted(() => {
  document.removeEventListener('click', aoClicarFora)
})
</script>

<template>
  <div>
    <PageHero
      kicker="Eventos"
      title="Encontros que colocam a educação em movimento."
      text="Ao longo do ano, o A TARDE Educação promove diferentes experiências que ampliam os espaços de aprendizagem, diálogo e participação. São encontros, iniciativas culturais, formações e premiações que aproximam educadores, estudantes e comunidades de temas relevantes para a educação e para a sociedade."
    >
      <a
        href="https://atardeeducacaopremia.atarde.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        class="ate-premia-cta"
      >
        <div>
          <strong>Conheça o nosso portal de premiações</strong>
          <span>Concursos culturais, prêmios e regulamentos do A TARDE Educação, tudo em um só lugar.</span>
        </div>
        <span class="ate-btn ate-btn--primary ate-btn--sm ate-premia-cta__btn">
          Visitar portal
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </a>
    </PageHero>

    <section class="ate-section">
      <div class="ate-container">
        <div class="ate-toolbar ate-reveal" v-reveal="80">
          <p class="ate-kicker" style="margin-bottom: 0">Iniciativas permanentes</p>
          <SearchInput v-model="busca" placeholder="Buscar por nome ou tema..." />
        </div>

        <div v-if="filtrados.length" ref="gridRef" class="ate-eventos-grid">
          <div v-for="(evento, i) in filtrados" :key="evento.nome" class="ate-reveal" v-reveal="i * 90">
            <a
              :href="evento.link"
              target="_blank"
              rel="noopener noreferrer"
              class="ate-card ate-evento"
              :class="{ 'is-active': eventoAtivo === i }"
              @click="aoClicarCard($event, i)"
            >
              <div class="ate-evento__content">
                <span class="ate-evento__index">{{ evento.ano }}</span>
                <h3>{{ evento.nome }}</h3>
                <p>{{ evento.texto }}</p>
                <span class="ate-evento__link">
                  Visitar site
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span class="ate-evento__hint">
                  Clique 2x para visitar o site
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </div>

              <div class="ate-evento__photo" :style="{ backgroundImage: `url(${evento.imagem})` }">
                <span class="ate-evento__photo-name">{{ evento.nome }}</span>
              </div>
            </a>
          </div>
        </div>
        <p v-else class="ate-empty">Nenhum evento encontrado para essa busca.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-premia-cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 1.5rem 1.75rem;
  margin-top: 2rem;
  border-radius: var(--ate-radius);
  background: linear-gradient(135deg, var(--ate-blue) 0%, var(--ate-blue-deep) 100%);
  color: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
:root[data-theme='dark'] .ate-premia-cta {
  background: linear-gradient(135deg, #0e2c40 0%, #071620 100%);
}
.ate-premia-cta:hover {
  transform: translateY(-2px);
  box-shadow: var(--ate-shadow-md);
}
.ate-premia-cta strong {
  display: block;
  font-family: var(--ate-font-display);
  font-size: 1.15rem;
  margin-bottom: 0.3rem;
}
.ate-premia-cta span:not(.ate-premia-cta__btn) {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.92rem;
}
.ate-premia-cta__btn {
  flex-shrink: 0;
  pointer-events: none;
}

.ate-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2.2rem;
}

/* Só existem 3 eventos (lista fixa), então o número de colunas é
   travado por breakpoint em vez de usar auto-fit/auto-fill — com
   auto-fit/auto-fill, quando a busca filtra e sobra 1 ou 2 cards, os
   restantes cresceriam pra preencher o espaço das colunas que
   sumiram. Assim o tamanho do card fica igual, filtrado ou não. */
.ate-eventos-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
}
@media (max-width: 900px) {
  .ate-eventos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .ate-eventos-grid {
    grid-template-columns: 1fr;
  }
}

.ate-evento {
  display: block;
  position: relative;
  height: 100%;
  min-height: 300px;
  overflow: hidden;
  color: var(--ate-ink);
}

.ate-evento__content {
  position: relative;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: opacity 0.3s ease;
}
/* Desktop/mouse: hover troca conteúdo <-> foto. Em touch (sem hover
   real) a troca passa a ser por toque — 1º clique mostra a foto, 2º
   clique (card já ativo) navega — controlado via classe ".is-active"
   (ver eventoAtivo no script). */
@media (hover: hover) and (pointer: fine) {
  .ate-evento:hover .ate-evento__content {
    opacity: 0;
  }
}
.ate-evento.is-active .ate-evento__content {
  opacity: 0;
}

.ate-evento__hint {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin-top: 0.6rem;
  font-size: 0.78rem;
  color: var(--ate-ink-soft);
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
.ate-evento__content p {
  font-size: 0.96rem;
  flex: 1;
}
/* "Visitar site" só faz sentido com hover real (desktop); no toque, o
   texto explicando o duplo clique (.ate-evento__hint) toma o lugar dele. */
.ate-evento__link {
  display: none;
  align-items: center;
  gap: 0.35rem;
  margin-top: 1.2rem;
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--ate-blue);
}
@media (hover: hover) and (pointer: fine) {
  .ate-evento__link {
    display: flex;
  }
  .ate-evento__hint {
    display: none;
  }
}

/* A foto (recortada pra caber, sem alterar o tamanho do card) tem o
   nome do evento sobre um gradiente escuro no rodapé. */
.ate-evento__photo {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  opacity: 0;
  transition: opacity 0.35s ease;
}
@media (hover: hover) and (pointer: fine) {
  .ate-evento:hover .ate-evento__photo {
    opacity: 1;
  }
}
.ate-evento.is-active .ate-evento__photo {
  opacity: 1;
}
.ate-evento__photo-name {
  width: 100%;
  padding: 1.5rem 1.5rem 1.25rem;
  background: linear-gradient(0deg, rgba(9, 41, 66, 0.85) 0%, rgba(9, 41, 66, 0) 100%);
  color: #fff;
  font-family: var(--ate-font-display);
  font-size: 1.15rem;
  line-height: 1.3;
}

.ate-empty {
  padding: 3rem 1rem;
  text-align: center;
  color: var(--ate-ink-soft);
  border: 1px dashed var(--ate-line);
  border-radius: var(--ate-radius);
}
</style>
