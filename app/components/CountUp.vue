<script setup lang="ts">
const props = defineProps<{
  to: number
  suffix?: string
  duration?: number
}>()

const display = ref('0')
const el = ref<HTMLElement | null>(null)

function animate() {
  const duration = props.duration ?? 1400
  const start = performance.now()
  const from = 0

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const value = Math.round(from + (props.to - from) * eased)
    display.value = value.toLocaleString('pt-BR')
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  if (!el.value) return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    display.value = props.to.toLocaleString('pt-BR')
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animate()
          observer.disconnect()
        }
      }
    },
    { threshold: 0.4 }
  )
  observer.observe(el.value)
})
</script>

<template>
  <span ref="el">{{ display }}{{ suffix }}</span>
</template>
