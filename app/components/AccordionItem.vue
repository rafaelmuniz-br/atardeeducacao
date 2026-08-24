<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  open: boolean
}>()

const emit = defineEmits<{ toggle: [] }>()
</script>

<template>
  <div class="ate-accordion" :class="{ 'is-open': open }">
    <button type="button" class="ate-accordion__head" :aria-expanded="open" @click="emit('toggle')">
      <span class="ate-accordion__head-text">
        <strong>{{ title }}</strong>
        <small v-if="subtitle">{{ subtitle }}</small>
      </span>
      <svg class="ate-accordion__chevron" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2">
        <path d="m6 9 6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <Transition name="ate-expand">
      <div v-if="open" class="ate-accordion__panel">
        <div class="ate-accordion__panel-inner">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.ate-accordion {
  border: 1px solid var(--ate-line);
  border-radius: var(--ate-radius-sm);
  background: var(--ate-surface);
  overflow: hidden;
  transition: border-color 0.2s ease;
}
.ate-accordion.is-open {
  border-color: var(--ate-blue);
}

.ate-accordion__head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  color: var(--ate-ink);
}

.ate-accordion__head-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.ate-accordion__head-text strong {
  font-size: 1.02rem;
}
.ate-accordion__head-text small {
  color: var(--ate-ink-soft);
  font-size: 0.85rem;
}

.ate-accordion__chevron {
  flex-shrink: 0;
  color: var(--ate-blue);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.ate-accordion.is-open .ate-accordion__chevron {
  transform: rotate(180deg);
}

.ate-accordion__panel-inner {
  padding: 0 1.3rem 1.3rem;
  color: var(--ate-ink-soft);
  line-height: 1.7;
}
</style>
