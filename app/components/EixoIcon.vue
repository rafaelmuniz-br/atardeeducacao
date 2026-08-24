<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <svg viewBox="0 0 48 48" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <template v-if="name === 'jornal'">
      <path d="M8 10h26a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4Z" />
      <path d="M38 14v20a4 4 0 0 0 4 4" />
      <path d="M14 17h14M14 23h14M14 29h9" />
    </template>
    <template v-else-if="name === 'financeira'">
      <circle cx="24" cy="24" r="15" />
      <path d="M24 16v16M28.5 19.5c-1-1-2.7-1.6-4.5-1.6-2.8 0-5 1.4-5 3.6 0 4.6 9 2.4 9 7 0 2.2-2.2 3.6-5 3.6-1.8 0-3.5-.6-4.5-1.6" />
    </template>
    <template v-else-if="name === 'socioambiental'">
      <path d="M24 8c6 5 9 10.5 9 16a9 9 0 1 1-18 0c0-5.5 3-11 9-16Z" />
      <path d="M24 24v10" />
    </template>
    <template v-else-if="name === 'midiatica'">
      <rect x="6" y="10" width="36" height="22" rx="3" />
      <path d="M17 40h14M24 32v8" />
      <path d="M14 20l5 4-5 4M26 28h6" />
    </template>
    <template v-else-if="name === 'sociedade'">
      <circle cx="17" cy="17" r="5" />
      <circle cx="32" cy="17" r="5" />
      <path d="M6 38c0-6 5-10 11-10s11 4 11 10M20 38c0-6 5-10 11-10s11 4 11 10" />
    </template>
    <template v-else-if="name === 'empreendedorismo'">
      <path d="M24 6 30 18l13 2-9.5 9 2.5 13-12-6.5L12 42l2.5-13L5 20l13-2Z" />
    </template>
    <template v-else-if="name === 'socioemocional'">
      <path d="M24 40S8 30 8 18.5A8.5 8.5 0 0 1 24 15a8.5 8.5 0 0 1 16 3.5C40 30 24 40 24 40Z" />
    </template>
  </svg>
</template>
