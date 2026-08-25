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
const fontReady = ref(false)

onMounted(async () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) {
    visible.value = false
    return
  }

  // Espera a fonte de título carregar (com um teto de 300ms) antes de
  // revelar o texto — sem isso, a troca da fonte reserva pra Bree Serif
  // no meio da animação de entrada das palavras (font-display: swap)
  // fazia cada palavra mudar de largura durante o movimento, dando um
  // leve "engasgo" visual.
  if ('fonts' in document) {
    try {
      await Promise.race([
        document.fonts.load('400 3rem "Bree Serif"'),
        new Promise((resolve) => setTimeout(resolve, 300)),
      ])
    } catch {
      // segue com a fonte reserva se algo falhar — nunca trava o preloader
    }
  }
  fontReady.value = true

  const leaveTimer = setTimeout(() => {
    leaving.value = true
  }, 1725)

  const hideTimer = setTimeout(() => {
    visible.value = false
  }, 2360)

  onUnmounted(() => {
    clearTimeout(leaveTimer)
    clearTimeout(hideTimer)
  })
})
</script>

<template>
  <div v-if="visible" class="ate-preloader" :class="{ 'is-leaving': leaving }" aria-hidden="true">
    <div class="ate-preloader__bar" />
    <p v-if="fontReady" class="ate-preloader__text">
      <span v-for="(word, i) in words" :key="word" class="ate-preloader__word" :style="{ animationDelay: `${i * 150 + 140}ms` }">
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
  transition: transform 0.75s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.58s ease 0.17s;
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
  animation: ate-bar-grow 1.73s cubic-bezier(0.65, 0, 0.35, 1) forwards;
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
  animation: ate-word-in 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
