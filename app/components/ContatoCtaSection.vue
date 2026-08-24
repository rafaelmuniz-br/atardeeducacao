<template>
  <section class="ate-section ate-cta">
    <div class="ate-container ate-cta__inner ate-reveal" v-reveal>
      <div>
        <h2 class="ate-eyebrow-title">Vamos conversar sobre educação?</h2>
        <p class="ate-cta__text">
          Rua Professor Milton Cayres de Brito, 204, Salvador — Bahia · educacaoatarde@gmail.com
        </p>
      </div>
      <NuxtLink to="/contato" class="ate-btn ate-btn--primary">Entre em contato</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.ate-cta {
  padding-top: 0;
}
.ate-cta__inner {
  background: linear-gradient(135deg, var(--ate-blue) 0%, var(--ate-blue-deep) 100%);
  border-radius: 28px;
  padding: clamp(2.5rem, 5vw, 4rem);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  color: #fff;
}
:root[data-theme='dark'] .ate-cta__inner {
  background: linear-gradient(135deg, #0e2c40 0%, #071620 100%);
}
.ate-cta__inner h2 {
  color: #fff;
}
.ate-cta__text {
  color: rgba(255, 255, 255, 0.85);
  margin-top: 0.6rem;
  max-width: 46ch;
}
</style>
