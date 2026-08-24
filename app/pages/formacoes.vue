<script setup lang="ts">
useSeoMeta({
  title: 'Formações — A TARDE Educação',
  description:
    'Formação continuada para educadores no Ambiente Virtual de Aprendizagem do A TARDE Educação: cursos, formações e conteúdos educativos.',
})
</script>

<template>
  <div>
    <PageHero
      kicker="Formações"
      title="Formação para continuar aprendendo e transformar práticas."
      text="A formação continuada amplia repertórios, provoca novas perguntas e fortalece a prática educativa. Aprender continuamente também é uma forma de transformar a educação."
    />

    <section class="ate-section">
      <div class="ate-container">
        <div class="ate-ava-card ate-reveal" v-reveal>
          <div class="ate-ava-card__icon">
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M24 8 4 17l20 9 20-9-20-9Z" />
              <path d="M12 21v10c0 2.8 5.8 6 12 6s12-3.2 12-6V21M40 17v13" />
            </svg>
          </div>
          <h2>Conheça nosso ambiente de aprendizagem</h2>
          <p>
            Acesse o AVA do A TARDE Educação e encontre nossas formações, cursos e conteúdos educativos.
          </p>
          <a
            href="#"
            class="ate-btn ate-btn--primary"
            rel="noopener"
            title="Endereço do AVA a ser informado pela equipe do A TARDE Educação"
          >
            Acessar o AVA
          </a>
          <p class="ate-ava-card__note">
            * O link do Ambiente Virtual de Aprendizagem (AVA) deve ser fornecido pela equipe do A TARDE Educação
            para substituir este espaço reservado.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-ava-card {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
  padding: clamp(2.5rem, 5vw, 4rem);
  border-radius: var(--ate-radius);
  background: var(--ate-bg-alt);
  border: 1px solid var(--ate-line);
}
.ate-ava-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: var(--ate-surface);
  color: var(--ate-blue);
  margin-bottom: 1.5rem;
  box-shadow: var(--ate-shadow-sm);
}
.ate-ava-card h2 {
  font-size: 1.7rem;
  margin-bottom: 0.8rem;
}
.ate-ava-card p {
  margin-bottom: 1.75rem;
}
.ate-ava-card__note {
  margin: 1.5rem 0 0;
  font-size: 0.82rem;
  font-style: italic;
  color: var(--ate-ink-soft);
}
</style>
