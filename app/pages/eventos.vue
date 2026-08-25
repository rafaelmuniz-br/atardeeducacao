<script setup lang="ts">
import { eventos } from '~/data/eventos'

useSeoMeta({
  title: 'Eventos — A TARDE Educação',
  description:
    'Concurso Cultural Jovem Jornalista, Prêmio Ecoinovar e Prêmio Trânsito de Ideias: conheça as premiações e concursos culturais do A TARDE Educação.',
})

const busca = ref('')
const filtrados = computed(() => eventos.filter((e) => matchesSearch(busca.value, e.nome, e.tags, e.resumo)))
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

        <div v-if="filtrados.length" class="ate-eventos-grid">
          <a
            v-for="(evento, i) in filtrados"
            :key="evento.nome"
            :href="evento.link"
            target="_blank"
            rel="noopener noreferrer"
            class="ate-card ate-evento ate-reveal"
            v-reveal="i * 90"
          >
            <div class="ate-evento__content">
              <span class="ate-evento__index">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3>{{ evento.nome }}</h3>
              <p>{{ evento.texto }}</p>
              <span class="ate-evento__link">
                Visitar site
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

.ate-eventos-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  align-items: stretch;
}

.ate-evento {
  display: block;
  position: relative;
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
.ate-evento:hover .ate-evento__content {
  opacity: 0;
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
.ate-evento__link {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 1.2rem;
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--ate-blue);
}

/* No hover, a foto (recortada pra caber, sem alterar o tamanho do card)
   aparece cobrindo o conteúdo, com o nome do evento sobre um gradiente
   escuro no rodapé. */
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
.ate-evento:hover .ate-evento__photo {
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
