<script setup lang="ts"></script>

<template>
  <section class="ate-hero">
    <div class="ate-hero__bg" aria-hidden="true">
      <div class="ate-hero__blob ate-hero__blob--a" />
      <div class="ate-hero__blob ate-hero__blob--b" />
    </div>

    <div class="ate-container ate-hero__inner">
      <p class="ate-kicker ate-reveal is-visible">Programa do Jornal A TARDE desde 1996</p>
      <h1 class="ate-hero__title ate-reveal is-visible" style="transition-delay: 90ms">
        Educação que conecta <span>informação</span>, <span>conhecimento</span> e <span>transformação</span>.
      </h1>
      <p class="ate-hero__text ate-reveal is-visible" style="transition-delay: 180ms">
        Há três décadas, o A TARDE Educação aproxima comunicação e educação para ampliar possibilidades de
        aprendizagem, fortalecer a formação de educadores e contribuir para a formação de leitores e cidadãos mais
        críticos, participativos e conscientes.
      </p>
      <div class="ate-hero__actions ate-reveal is-visible" style="transition-delay: 260ms">
        <NuxtLink to="/o-programa" class="ate-btn ate-btn--primary">Conheça o A TARDE Educação</NuxtLink>
        <NuxtLink to="/contato" class="ate-btn ate-btn--ghost ate-hero__ghost">Fale com a equipe</NuxtLink>
      </div>
    </div>

    <button type="button" class="ate-hero__scroll" aria-label="Rolar para o próximo conteúdo" @click="$emit('scroll-next')">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 4v15M6 14l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </section>
</template>

<style scoped>
.ate-hero {
  position: relative;
  overflow: hidden;
  padding: var(--ate-space) 0;
  background: linear-gradient(170deg, var(--ate-blue) 0%, var(--ate-blue-deep) 100%);
  color: #fff;
}
:root[data-theme='dark'] .ate-hero {
  background: linear-gradient(170deg, #0e2c40 0%, #071620 100%);
}

.ate-hero__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.ate-hero__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.35;
}
.ate-hero__blob--a {
  width: 480px;
  height: 480px;
  background: var(--ate-orange);
  top: -160px;
  right: -120px;
}
.ate-hero__blob--b {
  width: 360px;
  height: 360px;
  background: #ffffff;
  bottom: -180px;
  left: -80px;
  opacity: 0.12;
}

.ate-hero__inner {
  position: relative;
}

:root:not([data-theme='dark']) .ate-hero .ate-kicker {
  color: #fff;
}

.ate-hero__title {
  font-size: clamp(2.2rem, 5.4vw, 3.6rem);
  color: #fff;
  margin-bottom: 1.4rem;
}
.ate-hero__title span {
  color: var(--ate-orange-light);
}
:root[data-theme='dark'] .ate-hero__title span {
  color: #ffa94d;
}

.ate-hero__text {
  color: rgba(255, 255, 255, 0.88);
  font-size: 1.12rem;
  max-width: 60ch;
  margin-bottom: 2.2rem;
}

.ate-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.ate-hero__ghost {
  color: #fff;
}

.ate-hero__scroll {
  position: absolute;
  left: 50%;
  bottom: 1.6rem;
  transform: translateX(-50%);
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  animation: ate-bounce 2.2s ease-in-out infinite;
}
@keyframes ate-bounce {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, 8px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .ate-hero__scroll {
    animation: none;
  }
}
</style>
