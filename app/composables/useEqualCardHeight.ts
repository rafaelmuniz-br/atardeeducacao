import type { Ref } from 'vue'

// Iguala a altura de todos os cards de um grid ao card mais alto entre
// eles. Diferente do align-items:stretch do CSS Grid, que só iguala a
// altura DENTRO de cada linha da grade, aqui a altura fica igual em
// TODAS as linhas — o menor card se adapta ao maior, como pedido pelo
// cliente. Recalcula quando a lista filtrada muda (busca) ou a tela é
// redimensionada (a quantidade de colunas muda o quanto o texto quebra).
export function useEqualCardHeight(containerRef: Ref<HTMLElement | null>, cardSelector: string, watchSource: () => unknown) {
  const cardHeight = ref<number | null>(null)
  let resizeTimer: ReturnType<typeof setTimeout>

  function recalc() {
    const container = containerRef.value
    if (!container) return
    // Zera antes de remedir pra não travar a altura antiga como piso
    // (senão, num redimensionamento pra menos colunas, a medição já
    // sairia inflada pelo valor anterior).
    cardHeight.value = null
    nextTick(() => {
      const cards = Array.from(container.querySelectorAll<HTMLElement>(cardSelector))
      if (!cards.length) return
      cardHeight.value = Math.max(...cards.map((c) => c.getBoundingClientRect().height))
    })
  }

  function onResize() {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(recalc, 150)
  }

  onMounted(async () => {
    // Espera as fontes carregarem antes da primeira medição — sem isso,
    // o texto pode medir com a fonte reserva e reguebrar linha depois
    // que a fonte real chega, deixando a altura calculada errada.
    if ('fonts' in document) {
      try {
        await document.fonts.ready
      } catch {
        // segue com a medição mesmo assim
      }
    }
    recalc()
    window.addEventListener('resize', onResize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
    clearTimeout(resizeTimer)
  })
  watch(watchSource, () => nextTick(recalc))

  return cardHeight
}
