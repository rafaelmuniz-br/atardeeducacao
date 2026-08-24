<script setup lang="ts">
const { theme, toggle } = useTheme()
const route = useRoute()
const mobileOpen = ref(false)

const links = [
  { to: '/o-programa', label: 'O Programa' },
  { to: '/area-de-atuacao', label: 'Área de Atuação' },
  { to: '/cursos', label: 'Cursos' },
  { to: '/noticias', label: 'Notícias' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/depoimentos', label: 'Depoimentos' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/politicas-e-termos', label: 'Políticas e Termos' },
]

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
  }
)

const scrolled = ref(false)
function onScroll() {
  scrolled.value = window.scrollY > 12
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="ate-header" :class="{ 'is-scrolled': scrolled }">
    <div class="ate-container ate-header__bar">
      <NuxtLink to="/" class="ate-header__brand" aria-label="A TARDE Educação — página inicial">
        <img src="/marca/logo.png" alt="A TARDE Educação" width="180" height="54" />
      </NuxtLink>

      <nav class="ate-header__nav" aria-label="Navegação principal">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="ate-header__link">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="ate-header__actions">
        <button
          type="button"
          class="ate-theme-toggle"
          :aria-label="theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'"
          @click="toggle"
        >
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" stroke-linecap="round" />
          </svg>
          <svg v-else viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" stroke-linejoin="round" />
          </svg>
        </button>

        <NuxtLink to="/contato" class="ate-btn ate-btn--primary ate-btn--sm ate-header__cta">
          Fale Conosco
        </NuxtLink>

        <button
          type="button"
          class="ate-header__burger"
          :class="{ 'is-open': mobileOpen }"
          :aria-expanded="mobileOpen"
          aria-controls="ate-mobile-nav"
          aria-label="Abrir menu"
          @click="mobileOpen = !mobileOpen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <nav
      id="ate-mobile-nav"
      class="ate-header__mobile ate-collapse"
      :class="{ 'is-open': mobileOpen }"
      aria-label="Navegação mobile"
    >
      <div class="ate-header__mobile-inner">
        <NuxtLink to="/" class="ate-header__mobile-link">Home</NuxtLink>
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="ate-header__mobile-link">
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/contato" class="ate-btn ate-btn--primary" style="margin-top: 0.5rem">Fale Conosco</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.ate-header {
  position: sticky;
  top: 0;
  z-index: 500;
  background: color-mix(in srgb, var(--ate-bg) 92%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
}
.ate-header.is-scrolled {
  border-bottom-color: var(--ate-line);
  box-shadow: var(--ate-shadow-sm);
}

.ate-header__bar {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 76px;
  max-width: 1340px;
}

.ate-header__brand {
  flex-shrink: 0;
}
.ate-header__brand img {
  height: 46px;
  width: auto;
  display: block;
}

.ate-header__nav {
  display: none;
  align-items: center;
  gap: 1.1rem;
  margin-left: 0.5rem;
  flex: 1;
}

.ate-header__link {
  position: relative;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--ate-ink-soft);
  padding: 0.4rem 0.1rem;
  transition: color 0.15s ease;
  white-space: nowrap;
}
.ate-header__link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 100%;
  bottom: -2px;
  height: 2px;
  background: var(--ate-orange);
  transition: right 0.2s ease;
}
.ate-header__link:hover {
  color: var(--ate-ink);
}
.ate-header__link:hover::after,
.ate-header__link.router-link-active::after {
  right: 0;
}
.ate-header__link.router-link-active {
  color: var(--ate-blue);
}

.ate-header__actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-left: auto;
  flex-shrink: 0;
}

.ate-theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--ate-line);
  background: var(--ate-surface);
  color: var(--ate-ink);
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}
.ate-theme-toggle:hover {
  color: var(--ate-orange);
  border-color: var(--ate-orange);
  transform: rotate(-14deg);
}

.ate-header__cta {
  display: none;
}

.ate-header__burger {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: 1px solid var(--ate-line);
  background: var(--ate-surface);
  cursor: pointer;
}
.ate-header__burger span {
  width: 18px;
  height: 2px;
  background: var(--ate-ink);
  transition: transform 0.25s ease, opacity 0.2s ease;
}
.ate-header__burger.is-open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.ate-header__burger.is-open span:nth-child(2) {
  opacity: 0;
}
.ate-header__burger.is-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.ate-header__mobile {
  background: var(--ate-bg);
}
.ate-header__mobile.is-open {
  border-top: 1px solid var(--ate-line);
}
.ate-header__mobile-inner {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem 1.5rem;
  gap: 0.2rem;
}
.ate-header__mobile-link {
  padding: 0.7rem 0.2rem;
  font-weight: 600;
  color: var(--ate-ink);
  border-bottom: 1px solid var(--ate-line);
}
.ate-header__mobile-link.router-link-active {
  color: var(--ate-blue);
}

@media (min-width: 1260px) {
  .ate-header__nav {
    display: flex;
  }
  .ate-header__cta {
    display: inline-flex;
  }
  .ate-header__burger {
    display: none;
  }
}
</style>
