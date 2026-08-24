<script setup lang="ts">
defineProps<{
  kicker: string
  title: string
  text?: string
}>()
</script>

<template>
  <section class="ate-pagehero">
    <div class="ate-container ate-pagehero__inner">
      <p class="ate-kicker">{{ kicker }}</p>
      <h1 class="ate-pagehero__title">{{ title }}</h1>
      <p v-if="text" class="ate-lede ate-pagehero__text">{{ text }}</p>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.ate-pagehero {
  padding: var(--ate-space) 0;
  background: linear-gradient(180deg, var(--ate-bg-alt) 0%, var(--ate-bg) 100%);
  border-bottom: 1px solid var(--ate-line);
}
.ate-pagehero__title {
  font-size: clamp(2rem, 4.6vw, 3rem);
  margin-bottom: 1rem;
}
.ate-pagehero__text {
  font-size: 1.08rem;
}
</style>
