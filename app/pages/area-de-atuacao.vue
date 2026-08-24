<script setup lang="ts">
import { eixos } from '~/data/eixos'

useSeoMeta({
  title: 'Área de Atuação — A TARDE Educação',
  description:
    'Conheça os sete eixos de trabalho do A TARDE Educação: Jornal na Escola, Educação Financeira, Socioambiental, Midiática, Sociedade, Empreendedorismo e Socioemocional.',
})

const openSlug = ref(eixos[0]?.slug ?? '')
function toggle(slug: string) {
  openSlug.value = openSlug.value === slug ? '' : slug
}
</script>

<template>
  <div>
    <PageHero
      kicker="Área de Atuação"
      title="Educação para compreender o mundo e atuar sobre ele."
      text="Os desafios da educação atravessam diferentes dimensões da vida. Nossos eixos de atuação aproximam temas contemporâneos do cotidiano escolar, criando oportunidades para desenvolver conhecimentos, atitudes, competências e formas de participação."
    />

    <section class="ate-section">
      <div class="ate-container ate-eixos-list">
        <AccordionItem
          v-for="(eixo, i) in eixos"
          :key="eixo.slug"
          :title="eixo.nome"
          :subtitle="eixo.resumo"
          :open="openSlug === eixo.slug"
          class="ate-reveal"
          v-reveal="i * 60"
          @toggle="toggle(eixo.slug)"
        >
          <p>{{ eixo.texto }}</p>
        </AccordionItem>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-eixos-list {
  max-width: 820px;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}
</style>
