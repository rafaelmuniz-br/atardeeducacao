<script setup lang="ts">
// Aviso de privacidade — o site não usa cookies nem coleta dados de
// navegação, mas o cliente pediu um aviso educado na primeira visita
// mesmo assim, linkando pra Políticas e Termos e pedindo concordância
// explícita. Aparece uma vez só (fica salvo em localStorage, mesmo padrão
// do useTheme.ts) e some ao clicar em "Ok, concordo". Como o banner fica
// atrás do preloader (z-index menor), ele só aparece de fato quando o
// preloader termina de deslizar pra cima — não precisa de um timeout
// manual pra "esperar" o preloader acabar.
const STORAGE_KEY = 'ate-consent'

const shouldRender = ref(false)
const isVisible = ref(false)

onMounted(() => {
  let alreadyAccepted = false
  try {
    alreadyAccepted = localStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    // localStorage indisponível (ex.: modo privado) — mostra o aviso mesmo assim
  }
  if (alreadyAccepted) return

  shouldRender.value = true
  requestAnimationFrame(() => {
    isVisible.value = true
  })
})

function aceitar() {
  isVisible.value = false
  try {
    localStorage.setItem(STORAGE_KEY, 'true')
  } catch {
    // se não conseguir salvar, o aviso volta a aparecer na próxima visita — sem problema
  }
  setTimeout(() => {
    shouldRender.value = false
  }, 500)
}
</script>

<template>
  <div
    v-if="shouldRender"
    class="ate-consent"
    :class="{ 'is-visible': isVisible }"
    role="region"
    aria-label="Aviso de privacidade"
  >
    <div class="ate-consent__inner">
      <p>
        Este site não usa cookies de rastreamento nem coleta dados de navegação — mas vale dar uma olhada na nossa
        <NuxtLink to="/politicas-e-termos">Política de Privacidade e Termos de Uso</NuxtLink>.
      </p>
      <button type="button" class="ate-btn ate-btn--primary ate-btn--sm ate-consent__btn" @click="aceitar">
        Ok, concordo
      </button>
    </div>
  </div>
</template>

<style scoped>
.ate-consent {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  padding: 1rem;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
}
.ate-consent.is-visible {
  transform: none;
  opacity: 1;
}

.ate-consent__inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.5rem;
  border-radius: var(--ate-radius);
  border: 1px solid var(--ate-line);
  background: var(--ate-surface);
  box-shadow: var(--ate-shadow-md);
}
.ate-consent__inner p {
  flex: 1;
  min-width: 240px;
  font-size: 0.88rem;
  color: var(--ate-ink-soft);
}
.ate-consent__inner a {
  color: var(--ate-blue);
  font-weight: 700;
  text-decoration: underline;
}
:root[data-theme='dark'] .ate-consent__inner a {
  color: var(--ate-blue-bright);
}
.ate-consent__btn {
  flex-shrink: 0;
}

@media (prefers-reduced-motion: reduce) {
  .ate-consent {
    transition: none;
  }
}
</style>
