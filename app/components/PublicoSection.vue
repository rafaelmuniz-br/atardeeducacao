<script setup lang="ts">
const publicos = [
  {
    nome: 'Professores',
    texto: 'Formação e práticas pedagógicas que ajudam a transformar informação em conhecimento e ampliar as possibilidades de aprendizagem.',
    icon: 'M12 41V22M12 22 4 17l20-11 20 11-20 11-8-4.4M44 17v13M38 25v10.5c0 2-6.3 5-14 5s-14-3-14-5V25',
  },
  {
    nome: 'Gestores',
    texto: 'Experiências e projetos que dialogam com os desafios da escola e fortalecem processos educativos.',
    icon: 'M8 42V10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v32M30 42V19l10 5v18M14 15h4M14 21h4M14 27h4M22 15h4M22 21h4M22 27h4M14 42v-6h8v6',
  },
  {
    nome: 'Estudantes',
    texto: 'Aprendizagens que estimulam curiosidade, autoria, pensamento crítico e participação.',
    icon: 'M4 15 24 6l20 9-20 9-20-9Z M11 20v10c0 2.8 5.8 6 13 6s13-3.2 13-6V20 M44 15v13',
  },
]
</script>

<template>
  <section class="ate-section">
    <div class="ate-container">
      <div class="ate-heading ate-reveal" v-reveal>
        <p class="ate-kicker">Nosso público</p>
        <h2 class="ate-eyebrow-title">Para quem fazemos educação</h2>
      </div>

      <div class="ate-publico-grid">
        <article
          v-for="(item, i) in publicos"
          :key="item.nome"
          class="ate-card ate-publico-card ate-reveal"
          v-reveal="i * 110"
        >
          <svg viewBox="0 0 48 48" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path :d="item.icon" />
          </svg>
          <h3>{{ item.nome }}</h3>
          <p>{{ item.texto }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ate-heading {
  max-width: 680px;
  margin-bottom: 2.8rem;
}

.ate-publico-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}

.ate-publico-card {
  padding: 2rem 1.75rem;
  color: var(--ate-blue);
}
.ate-publico-card h3 {
  margin: 1.1rem 0 0.6rem;
  font-size: 1.3rem;
  color: var(--ate-ink);
}
.ate-publico-card p {
  font-size: 0.96rem;
}
</style>
