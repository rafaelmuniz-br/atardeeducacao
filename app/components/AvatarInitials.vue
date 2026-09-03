<script setup lang="ts">
const props = defineProps<{
  nome: string
  cor: string
  size?: number
  foto?: string
}>()

const iniciais = computed(() => {
  const partes = props.nome.trim().split(/\s+/)
  const primeiras = partes[0]?.[0] ?? ''
  const ultimas = partes.length > 1 ? partes[partes.length - 1][0] : ''
  return (primeiras + ultimas).toUpperCase()
})
</script>

<template>
  <img
    v-if="foto"
    class="ate-avatar ate-avatar--foto"
    :src="foto"
    :alt="`Foto de ${nome}`"
    :width="size ?? 56"
    :height="size ?? 56"
    loading="lazy"
  />
  <svg
    v-else
    class="ate-avatar"
    :width="size ?? 56"
    :height="size ?? 56"
    viewBox="0 0 56 56"
    role="img"
    :aria-label="`Foto de perfil de ${nome}`"
  >
    <circle cx="28" cy="28" r="28" :fill="cor" />
    <text x="28" y="28" text-anchor="middle" dominant-baseline="central" fill="#fff" font-weight="700" font-size="20">
      {{ iniciais }}
    </text>
  </svg>
</template>

<style scoped>
.ate-avatar {
  flex-shrink: 0;
  display: block;
  font-family: var(--ate-font-body);
}
.ate-avatar--foto {
  border-radius: 50%;
  object-fit: cover;
}
</style>
