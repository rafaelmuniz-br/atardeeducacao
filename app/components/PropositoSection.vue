<template>
  <section class="ate-section ate-section--alt ate-proposito">
    <div class="ate-container ate-proposito__grid">
      <div class="ate-reveal" v-reveal>
        <p class="ate-kicker">Nosso propósito</p>
        <h2 class="ate-eyebrow-title">Educação para compreender, criar e participar.</h2>
      </div>
      <div class="ate-reveal" v-reveal="120">
        <p class="ate-lede">
          O A TARDE Educação desenvolve projetos, formações, conteúdos e experiências que aproximam educação,
          comunicação e conhecimento. O propósito é ampliar as possibilidades de aprendizagem e fortalecer
          educadores e estudantes para ler, interpretar, produzir e participar de forma crítica e consciente do
          mundo em que vivem.
        </p>
        <NuxtLink to="/o-programa" class="ate-btn ate-btn--outline" style="margin-top: 1.75rem">
          Conheça o Programa
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ate-proposito__grid {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;
  align-items: start;
}

@media (min-width: 760px) {
  .ate-proposito__grid {
    grid-template-columns: 1fr 1.1fr;
  }
}
</style>
