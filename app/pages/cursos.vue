<script setup lang="ts">
import { cursos } from '~/data/cursos'

useSeoMeta({
  title: 'Cursos — A TARDE Educação',
  description:
    'Cursos do A TARDE Educação no Ambiente Virtual de Aprendizagem (AVA): formação continuada para educadores.',
})

const busca = ref('')
const filtrados = computed(() => cursos.filter((c) => matchesSearch(busca.value, c.titulo, c.tag, c.descricao)))
</script>

<template>
  <div>
    <PageHero
      kicker="Cursos"
      title="Cursos para continuar aprendendo e transformar práticas."
      text="Conheça nosso ambiente de aprendizagem: Acesse o AVA do A TARDE Educação e encontre nossos cursos e conteúdos educativos."
    >
      <a href="http://187.1.111.80/login/index.php" target="_blank" rel="noopener noreferrer" class="ate-btn ate-btn--primary" style="margin-top: 1.5rem">
        Acessar o AVA
      </a>
    </PageHero>

    <section class="ate-section ate-section--alt">
      <div class="ate-container">
        <div class="ate-toolbar ate-reveal" v-reveal>
          <div>
            <p class="ate-kicker" style="margin-bottom: 0.4rem">Catálogo</p>
            <h2 class="ate-eyebrow-title" style="font-size: 1.6rem">Cursos disponíveis no AVA</h2>
          </div>
          <SearchInput v-model="busca" placeholder="Buscar por curso ou tema..." />
        </div>

        <div v-if="filtrados.length" class="ate-cursos-grid">
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
