<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; statusMessage?: string } }>()

useSeoMeta({
  title: 'Página não encontrada — A TARDE Educação',
})
</script>

<template>
  <div>
    <SiteHeader />
    <section class="ate-error">
      <div class="ate-container ate-error__inner">
        <p class="ate-kicker">Erro {{ error.statusCode }}</p>
        <h1>Não encontramos esta página.</h1>
        <p class="ate-lede">
          O conteúdo que você procura pode ter mudado de endereço ou não existe mais. Volte para a página inicial
          ou explore as demais seções do A TARDE Educação.
        </p>
        <NuxtLink to="/" class="ate-btn ate-btn--primary" @click="clearError({ redirect: '/' })">
          Voltar para a Home
        </NuxtLink>
      </div>
    </section>
    <SiteFooter />
  </div>
</template>

<style scoped>
.ate-error {
  min-height: 60vh;
  display: flex;
  align-items: center;
  padding: 4rem 0;
}
.ate-error__inner {
  max-width: 620px;
}
.ate-error h1 {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  margin-bottom: 1rem;
}
.ate-error .ate-lede {
  margin-bottom: 2rem;
}
</style>
