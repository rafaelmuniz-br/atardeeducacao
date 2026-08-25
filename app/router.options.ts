import type { RouterConfig } from '@nuxt/schema'

// Por padrão o Nuxt já rola pro topo ao trocar de rota, mas herda o
// `scroll-behavior: smooth` do <html> (main.css) — em celular, qualquer
// mudança de layout durante a animação (menu mobile fechando, imagem
// carregando) cancela o scroll suave no meio do caminho, deixando a
// página "no meio" em vez do topo. Forçar `instant` aqui resolve.
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 88, behavior: 'smooth' }
    return { top: 0, left: 0, behavior: 'instant' }
  },
}
