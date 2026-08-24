<script setup lang="ts">
// Preloader de assinatura, inspirado no efeito "Terapia salva vidas" do
// juliovenori.com.br (referência pedida pelo cliente): tela cheia na cor da
// marca, frase revelada palavra a palavra, depois desliza pra cima
// descobrindo o site por trás. Só roda no cliente e some sozinho — nunca
// bloqueia o conteúdo se o JS falhar, porque o overlay já nasce programado
// pra se remover via timers curtos.
const words = ['A', 'educação', 'muda', 'vidas.']
const visible = ref(true)
const leaving = ref(false)

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) {
    visible.value = false
    return
  }

  const leaveTimer = setTimeout(() => {
    leaving.value = true
  }, 1500)

  const hideTimer = setTimeout(() => {
    visible.value = false
  }, 2050)

  onUnmounted(() => {
    clearTimeout(leaveTimer)
    clearTimeout(hideTimer)
  })
})
</script>

<template>
  <div v-if="visible" class="ate-preloader" :class="{ 'is-leaving': leaving }" aria-hidden="true">
    <div class="ate-preloader__bar" />
    <p class="ate-preloader__text">
      <span v-for="(word, i) in words" :key="word" class="ate-preloader__word" :style="{ animationDelay: `${i * 130 + 120}ms` }">
        {{ word }}
      </span>
    </p>
  </div>
</template>

<style scoped>
.ate-preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(155deg, #0972b3 0%, #075685 100%);
  transition: transform 0.65s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.5s ease 0.15s;
}
.ate-preloader.is-leaving {
  transform: translateY(-100%);
}

.ate-preloader__bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 6px;
  background: #f58220;
  transform-origin: left;
  animation: ate-bar-grow 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.ate-preloader__text {
  margin: 0;
  color: #fff;
  font-family: var(--ate-font-display);
  font-size: clamp(1.6rem, 5vw, 3.2rem);
  text-align: center;
  padding: 0 1.5rem;
}

.ate-preloader__word {
  display: inline-block;
  margin: 0 0.28ch;
  opacity: 0;
  transform: translateY(26px);
  animation: ate-word-in 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes ate-word-in {
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes ate-bar-grow {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
