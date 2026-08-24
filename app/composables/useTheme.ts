const theme = ref<'light' | 'dark'>('light')

// Estado de tema compartilhado (claro/escuro), inspirado no dark mode do
// Washington Post citado como referência. O valor inicial real já foi
// aplicado no <html> por um script inline (ver nuxt.config app.head.script)
// antes da hidratação — aqui só sincronizamos o ref com o que já está no DOM.
export function useTheme() {
  function apply(value: 'light' | 'dark') {
    theme.value = value
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem('ate-theme', value)
    }
  }

  function toggle() {
    apply(theme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const current = document.documentElement.getAttribute('data-theme')
    if (current === 'dark' || current === 'light') theme.value = current
  })

  return { theme, toggle }
}
