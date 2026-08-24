<script setup lang="ts">
// Município (45) tem referência pública (matéria do atarde.com.br sobre o
// programa). Os demais são estimativas ilustrativas de um programa
// estadual com quase 3 décadas — a equipe do A TARDE Educação deve validar
// e ajustar os números oficiais antes da publicação final (ver relatório).
const stats = [
  { label: 'Municípios', value: 45 },
  { label: 'Professores', value: 8000, suffix: '+' },
  { label: 'Estudantes', value: 150000, suffix: '+' },
  { label: 'Escolas', value: 900, suffix: '+' },
]
</script>

<template>
  <section class="ate-section ate-section--alt">
    <div class="ate-container">
      <div class="ate-heading ate-reveal" v-reveal>
        <p class="ate-kicker">Nossa trajetória</p>
        <h2 class="ate-eyebrow-title">A TARDE Educação em números</h2>
        <p class="ate-lede" style="margin-top: 0.9rem">
          Uma trajetória construída com educadores, estudantes, escolas e territórios.
        </p>
      </div>

      <div class="ate-numeros-grid">
        <div v-for="(stat, i) in stats" :key="stat.label" class="ate-numero ate-reveal" v-reveal="i * 100">
          <strong><CountUp :to="stat.value" :suffix="stat.suffix" /></strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>

      <p class="ate-numeros-note">
        * Números ilustrativos de referência — a validação final dos dados oficiais é de responsabilidade da
        equipe do A TARDE Educação antes da publicação.
      </p>
    </div>
  </section>
</template>

<style scoped>
.ate-heading {
  max-width: 680px;
  margin-bottom: 2.8rem;
}

.ate-numeros-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.ate-numero {
  text-align: center;
  padding: 1.75rem 1rem;
  border-radius: var(--ate-radius);
  background: var(--ate-surface);
  border: 1px solid var(--ate-line);
}
.ate-numero strong {
  display: block;
  font-family: var(--ate-font-display);
  font-size: clamp(2.1rem, 4vw, 2.8rem);
  color: var(--ate-blue);
}
.ate-numero span {
  display: block;
  margin-top: 0.35rem;
  font-weight: 700;
  color: var(--ate-ink-soft);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.ate-numeros-note {
  margin-top: 1.75rem;
  font-size: 0.82rem;
  color: var(--ate-ink-soft);
  font-style: italic;
}
</style>
