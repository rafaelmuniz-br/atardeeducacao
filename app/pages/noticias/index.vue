<script setup lang="ts">
import { noticias } from '~/data/noticias'

useSeoMeta({
  title: 'Notícias — A TARDE Educação',
  description: 'Acompanhe as últimas notícias sobre educação publicadas pelo Jornal A TARDE.',
})

// Estilo do grid de notícias — duas opções prontas, trocar aqui é reversível
// a qualquer momento (nenhuma das duas foi removida do projeto):
// 'fotos'   -> grid grande em masonry, só a foto + "Ler no A TARDE", com a
//              legenda (data/título/resumo) aparecendo num painel branco que
//              sobe ao passar o mouse. Pedido explícito do cliente.
// 'classico' -> versão anterior: card com foto de altura fixa + legenda
//              sempre visível abaixo.
const estiloGrid: 'fotos' | 'classico' = 'classico'

const busca = ref('')

const filtradas = computed(() => noticias.filter((n) => matchesSearch(busca.value, n.titulo, n.tags, n.resumo)))
</script>

<template>
  <div>
    <PageHero
      kicker="Notícias"
      title="Informação que acompanha a educação e o mundo."
      text="Acompanhe as últimas notícias sobre educação publicadas pelo Jornal A TARDE. Cada notícia abre no site oficial atarde.com.br."
    />

    <section class="ate-section">
      <div :class="estiloGrid === 'fotos' ? 'ate-container-wide' : 'ate-container'">
        <div class="ate-toolbar ate-reveal" v-reveal>
          <SearchInput v-model="busca" placeholder="Buscar por título ou tema..." large />
        </div>

        <template v-if="estiloGrid === 'fotos'">
          <div v-if="filtradas.length" class="ate-photo-grid">
            <NewsPhotoCard v-for="n in filtradas" :key="n.linkExterno" :noticia="n" />
          </div>
          <p v-else class="ate-empty">Nenhuma notícia encontrada para essa busca.</p>
        </template>

        <template v-else>
          <div v-if="filtradas.length" class="ate-news-grid">
            <div
              v-for="(n, i) in filtradas"
              :key="n.linkExterno"
              class="ate-reveal"
              :style="{ transitionDelay: `${(i % 6) * 60}ms` }"
              v-reveal="0"
            >
              <NewsCard :noticia="n" />
            </div>
          </div>
          <p v-else class="ate-empty">Nenhuma notícia encontrada para essa busca.</p>
        </template>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-toolbar {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}
.ate-empty {
  padding: 3rem 1rem;
  text-align: center;
  color: var(--ate-ink-soft);
  border: 1px dashed var(--ate-line);
  border-radius: var(--ate-radius);
}

/* ---------- grid clássico (cards com legenda fixa) ---------- */
.ate-news-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

/* ---------- grid de fotos em masonry ---------- */
.ate-container-wide {
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 50px;
}

.ate-photo-grid {
  columns: 2;
  column-gap: 1.25rem;
}
@media (max-width: 640px) {
  .ate-photo-grid {
    columns: 1;
  }
  .ate-container-wide {
    padding: 0 20px;
  }
}
</style>
