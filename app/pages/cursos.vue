<script setup lang="ts">
import { cursos } from '~/data/cursos'

useSeoMeta({
  title: 'Formações — A TARDE Educação',
  description:
    'Formações do A TARDE Educação no Ambiente Virtual de Aprendizagem (AVA): formação continuada para educadores.',
})

const busca = ref('')
const filtrados = computed(() => cursos.filter((c) => matchesSearch(busca.value, c.titulo, c.tag, c.descricao)))

const cursosGridRef = ref<HTMLElement | null>(null)
const cardHeight = useEqualCardHeight(cursosGridRef, '.ate-course-card', () => filtrados.value.length)
</script>

<template>
  <div>
    <PageHero
      kicker="Formações"
      title="Formação para continuar aprendendo e transformar práticas."
      text="A formação continuada amplia repertórios, provoca novas perguntas e fortalece a prática educativa. Aprender continuamente também é uma forma de transformar a educação."
    >
      <a
        href="http://187.1.111.80/login/index.php"
        target="_blank"
        rel="noopener noreferrer"
        class="ate-ava-link"
      >
        Acesse o nosso ambiente virtual de aprendizagem
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </PageHero>

    <section class="ate-section ate-section--alt">
      <div class="ate-container">
        <div class="ate-toolbar ate-reveal" v-reveal>
          <div>
            <p class="ate-kicker" style="margin-bottom: 0.4rem">Catálogo</p>
            <h2 class="ate-eyebrow-title" style="font-size: 1.6rem">Formações disponíveis no AVA</h2>
          </div>
          <SearchInput v-model="busca" placeholder="Buscar por curso ou tema..." />
        </div>

        <div
          v-if="filtrados.length"
          ref="cursosGridRef"
          class="ate-cursos-grid"
          :style="{ '--ate-card-min-h': cardHeight ? `${cardHeight}px` : undefined }"
        >
          <div v-for="(c, i) in filtrados" :key="c.slug" class="ate-reveal" :style="{ transitionDelay: `${(i % 6) * 60}ms` }" v-reveal="0">
            <CourseCard :curso="c" />
          </div>
        </div>
        <p v-else class="ate-empty">Nenhum curso encontrado para essa busca.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* display:inline-block (não flex) pra que, se o texto quebrar em mais de
   uma linha no celular, a seta flua junto com a última palavra em vez de
   ficar centralizada flutuando no meio do bloco. */
.ate-ava-link {
  display: inline-block;
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 1.02rem;
  color: var(--ate-blue);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.15s ease;
}
.ate-ava-link svg {
  display: inline-block;
  vertical-align: -2px;
  margin-left: 0.35rem;
}
.ate-ava-link:hover {
  color: var(--ate-orange-deep);
}
:root[data-theme='dark'] .ate-ava-link:hover {
  color: var(--ate-orange);
}

.ate-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.ate-cursos-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.ate-empty {
  padding: 3rem 1rem;
  text-align: center;
  color: var(--ate-ink-soft);
  border: 1px dashed var(--ate-line);
  border-radius: var(--ate-radius);
}
</style>
