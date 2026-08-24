<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <label class="ate-search">
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" stroke-linecap="round" />
    </svg>
    <input
      type="search"
      :value="modelValue"
      :placeholder="placeholder ?? 'Pesquisar...'"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <button
      v-if="modelValue"
      type="button"
      class="ate-search__clear"
      aria-label="Limpar pesquisa"
      @click="emit('update:modelValue', '')"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2">
        <path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
      </svg>
    </button>
  </label>
</template>

<style scoped>
.ate-search {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  max-width: 380px;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--ate-line);
  background: var(--ate-surface);
  color: var(--ate-ink-soft);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.ate-search:focus-within {
  border-color: var(--ate-blue);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--ate-blue) 20%, transparent);
}

.ate-search svg {
  flex-shrink: 0;
}

.ate-search input {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.96rem;
  color: var(--ate-ink);
}
.ate-search input::placeholder {
  color: var(--ate-ink-soft);
}
/* remove o "x" nativo do input[type=search] pra usar só o nosso botão */
.ate-search input::-webkit-search-cancel-button {
  display: none;
}

.ate-search__clear {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
  background: var(--ate-bg-alt);
  color: var(--ate-ink-soft);
  cursor: pointer;
  transition: color 0.15s ease, background-color 0.15s ease;
}
.ate-search__clear:hover {
  background: var(--ate-orange);
  color: #fff;
}
</style>
