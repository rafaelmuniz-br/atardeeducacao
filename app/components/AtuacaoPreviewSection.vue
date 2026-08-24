<script setup lang="ts">
import { eixos } from '~/data/eixos'
</script>

<template>
  <section class="ate-section">
    <div class="ate-container">
      <div class="ate-heading ate-reveal" v-reveal>
        <p class="ate-kicker">Onde atuamos</p>
        <h2 class="ate-eyebrow-title">Nossas frentes de atuação</h2>
        <p class="ate-lede" style="margin-top: 0.9rem">
          A educação acontece em diferentes dimensões. Por isso, organizamos nossa atuação em eixos que aproximam
          temas contemporâneos do cotidiano escolar e criam oportunidades para aprender, refletir e agir.
        </p>
      </div>

      <div class="ate-eixos-grid">
        <NuxtLink
          v-for="(eixo, i) in eixos"
          :key="eixo.slug"
          to="/area-de-atuacao"
          class="ate-card ate-eixo-card ate-reveal"
          v-reveal="i * 70"
        >
          <span class="ate-eixo-card__icon"><EixoIcon :name="eixo.icone" /></span>
          <span class="ate-eixo-card__name">{{ eixo.nome }}</span>
        </NuxtLink>
      </div>

      <div style="margin-top: 2.4rem">
        <NuxtLink to="/area-de-atuacao" class="ate-btn ate-btn--outline">Confira nossos eixos de trabalho</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ate-heading {
  max-width: 680px;
  margin-bottom: 2.6rem;
}

.ate-eixos-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}

.ate-eixo-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 1.5rem 1.3rem;
  color: var(--ate-ink);
}
.ate-eixo-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: var(--ate-bg-alt);
  color: var(--ate-blue);
}
.ate-eixo-card:hover .ate-eixo-card__icon {
  background: var(--ate-orange);
  color: #1a1005;
}
.ate-eixo-card__name {
  font-weight: 700;
  font-size: 0.98rem;
  line-height: 1.3;
}
</style>
