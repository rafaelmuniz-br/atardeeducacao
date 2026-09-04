<script setup lang="ts">
import { depoimentos } from '~/data/depoimentos'

useSeoMeta({
  title: 'Depoimentos — A TARDE Educação',
  description: 'Relatos de educadores, gestores e estudantes que vivem as ações do A TARDE Educação.',
})

const track = ref<HTMLElement | null>(null)
const slideRefs = ref<HTMLElement[]>([])
const activeIndex = ref(0)

// "Ler mais" só aparece pra depoimentos longos o suficiente pra
// realmente precisar (o limite em caracteres é só uma aproximação
// barata — quem decide onde corta de verdade é o line-clamp no CSS).
const LIMITE_TEXTO_LONGO = 220
const expandidos = reactive<Record<string, boolean>>({})
function toggleExpandido(nome: string) {
  expandidos[nome] = !expandidos[nome]
}

function setSlideRef(el: unknown, i: number) {
  if (el instanceof HTMLElement) slideRefs.value[i] = el
}

function scrollToIndex(i: number) {
  const clamped = Math.max(0, Math.min(i, depoimentos.length - 1))
  slideRefs.value[clamped]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
}

function prev() {
  scrollToIndex(activeIndex.value - 1)
}
function next() {
  scrollToIndex(activeIndex.value + 1)
}

let ticking = false
function onScroll() {
  if (ticking || !track.value) return
  ticking = true
  requestAnimationFrame(() => {
    const el = track.value!
    const center = el.scrollLeft + el.clientWidth / 2
    let closest = 0
    let closestDist = Infinity
    slideRefs.value.forEach((slide, i) => {
      const dist = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center)
      if (dist < closestDist) {
        closestDist = dist
        closest = i
      }
    })
    activeIndex.value = closest
    ticking = false
  })
}

onMounted(() => {
  track.value?.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  track.value?.removeEventListener('scroll', onScroll)
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
      <div class="ate-container">
        <div class="ate-carousel ate-reveal" v-reveal>
          <button
            type="button"
            class="ate-carousel__arrow ate-carousel__arrow--prev"
            :disabled="activeIndex === 0"
            aria-label="Depoimento anterior"
            @click="prev"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4">
              <path d="m15 6-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <div ref="track" class="ate-carousel__track">
            <article
              v-for="(dep, i) in depoimentos"
              :key="dep.nome"
              :ref="(el) => setSlideRef(el, i)"
              class="ate-card ate-depoimento"
            >
              <svg class="ate-depoimento__quote" viewBox="0 0 32 24" width="34" height="26" fill="currentColor">
                <path d="M0 24V13.6C0 5.6 4.9 0.8 12.6 0v4.9c-4.2.7-6.6 3.3-6.6 6.8H12v12.3H0Zm18 0V13.6c0-8 4.9-12.8 12.6-13.6v4.9c-4.2.7-6.6 3.3-6.6 6.8H30v12.3H18Z" />
              </svg>
              <p
                class="ate-depoimento__texto"
                :class="{ 'is-truncado': dep.texto.length > LIMITE_TEXTO_LONGO && !expandidos[dep.nome] }"
              >
                {{ dep.texto }}
              </p>
              <button
                v-if="dep.texto.length > LIMITE_TEXTO_LONGO"
                type="button"
                class="ate-depoimento__ler-mais"
                @click="toggleExpandido(dep.nome)"
              >
                {{ expandidos[dep.nome] ? 'Ler menos' : 'Ler mais' }}
              </button>
              <footer>
                <AvatarInitials :nome="dep.nome" :cor="dep.cor" :size="52" :foto="dep.foto" />
                <div class="ate-depoimento__caption">
                  <strong>{{ dep.nome }}</strong>
                  <span>{{ dep.papel }}</span>
                </div>
              </footer>
            </article>
          </div>

          <button
            type="button"
            class="ate-carousel__arrow ate-carousel__arrow--next"
            :disabled="activeIndex === depoimentos.length - 1"
            aria-label="Próximo depoimento"
            @click="next"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4">
              <path d="m9 6 6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        <div class="ate-carousel__dots" role="tablist" aria-label="Selecionar depoimento">
          <button
            v-for="(dep, i) in depoimentos"
            :key="dep.nome"
            type="button"
            class="ate-carousel__dot"
            :class="{ 'is-active': activeIndex === i }"
            :aria-label="`Ver depoimento de ${dep.nome}`"
            :aria-selected="activeIndex === i"
            role="tab"
            @click="scrollToIndex(i)"
          />
        </div>

        <p class="ate-depoimentos-note">Novos depoimentos serão adicionados aqui em breve.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-carousel {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.ate-carousel__track {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 0;
  padding: 0.25rem;
  margin: -0.25rem;
  scrollbar-width: none;
}
.ate-carousel__track::-webkit-scrollbar {
  display: none;
}

.ate-depoimento {
  flex: 0 0 min(560px, 86vw);
  scroll-snap-align: start;
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
.ate-depoimento__texto.is-truncado {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}
.ate-depoimento__ler-mais {
  display: inline-block;
  margin: -0.75rem 0 1.5rem;
  padding: 0;
  border: none;
  background: none;
  color: var(--ate-blue);
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}
.ate-depoimento__ler-mais:hover {
  color: var(--ate-orange-deep);
}
:root[data-theme='dark'] .ate-depoimento__ler-mais:hover {
  color: var(--ate-orange);
}
.ate-depoimento footer {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}
.ate-depoimento__caption {
  display: flex;
  flex-direction: column;
}
.ate-depoimento__caption strong {
  color: var(--ate-blue);
}
.ate-depoimento__caption span {
  font-size: 0.88rem;
  color: var(--ate-ink-soft);
}

.ate-carousel__arrow {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--ate-line);
  background: var(--ate-surface);
  color: var(--ate-blue);
  cursor: pointer;
  transition: all 0.15s ease;
}
.ate-carousel__arrow:hover:not(:disabled) {
  background: var(--ate-blue);
  border-color: var(--ate-blue);
  color: #fff;
  transform: translateY(-2px);
}
.ate-carousel__arrow:disabled {
  opacity: 0.35;
  cursor: default;
}

.ate-carousel__dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.75rem;
}
.ate-carousel__dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: none;
  background: var(--ate-line);
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;
}
.ate-carousel__dot:hover {
  background: var(--ate-blue-bright);
}
.ate-carousel__dot.is-active {
  background: var(--ate-blue);
  width: 22px;
  border-radius: 5px;
}

.ate-depoimentos-note {
  margin-top: 1.5rem;
  text-align: center;
  color: var(--ate-ink-soft);
  font-style: italic;
  font-size: 0.9rem;
}

@media (max-width: 640px) {
  .ate-carousel__arrow {
    display: none;
  }
  .ate-depoimento__texto {
    font-size: 1.05rem;
  }
}
</style>
