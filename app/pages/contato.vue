<script setup lang="ts">
import { faq } from '~/data/faq'

useSeoMeta({
  title: 'Contato — A TARDE Educação',
  description: 'Fale com a equipe do A TARDE Educação. Endereço, e-mail e perguntas frequentes sobre o programa.',
})

const form = reactive({ nome: '', email: '', assunto: '', mensagem: '' })
const enviado = ref(false)

function enviar() {
  const linhas = [
    `Nome: ${form.nome}`,
    `E-mail: ${form.email}`,
    form.assunto ? `Assunto: ${form.assunto}` : '',
    '',
    form.mensagem,
  ].filter(Boolean)

  const corpo = encodeURIComponent(linhas.join('\n'))
  const assunto = encodeURIComponent(form.assunto || 'Contato pelo site — A TARDE Educação')
  window.location.href = `mailto:educacaoatarde@gmail.com?subject=${assunto}&body=${corpo}`
  enviado.value = true
}

const openFaq = ref(0)
function toggleFaq(i: number) {
  openFaq.value = openFaq.value === i ? -1 : i
}

const mapSrc =
  'https://www.google.com/maps?q=Rua+Professor+Milton+Cayres+de+Brito,+204,+Salvador,+BA&output=embed'
</script>

<template>
  <div>
    <PageHero
      kicker="Fale Conosco"
      title="Vamos conversar sobre educação?"
      text="Quer conhecer nossas iniciativas, desenvolver uma parceria ou saber mais sobre os projetos e formações do A TARDE Educação? Entre em contato com nossa equipe."
    />

    <section class="ate-section">
      <div class="ate-container ate-contato__grid">
        <form class="ate-card ate-form ate-reveal" v-reveal @submit.prevent="enviar">
          <div class="ate-field">
            <label for="nome">Nome</label>
            <input id="nome" v-model="form.nome" type="text" required autocomplete="name" />
          </div>
          <div class="ate-field">
            <label for="email">E-mail</label>
            <input id="email" v-model="form.email" type="email" required autocomplete="email" />
          </div>
          <div class="ate-field">
            <label for="assunto">Assunto</label>
            <input id="assunto" v-model="form.assunto" type="text" placeholder="Parceria, formação, dúvida..." />
          </div>
          <div class="ate-field">
            <label for="mensagem">Mensagem</label>
            <textarea id="mensagem" v-model="form.mensagem" rows="5" required />
          </div>
          <button type="submit" class="ate-btn ate-btn--primary">Enviar mensagem</button>
          <Transition name="ate-expand">
            <p v-if="enviado" class="ate-form__sent">
              Seu aplicativo de e-mail deve abrir com a mensagem pronta — se não abrir, escreva direto para
              <a href="mailto:educacaoatarde@gmail.com">educacaoatarde@gmail.com</a>.
            </p>
          </Transition>
        </form>

        <div class="ate-contato-info ate-reveal" v-reveal="120">
          <div class="ate-info-item">
            <h3>Endereço</h3>
            <p>Rua Professor Milton Cayres de Brito, 204, Salvador — Bahia</p>
          </div>
          <div class="ate-info-item">
            <h3>E-mail</h3>
            <p><a href="mailto:educacaoatarde@gmail.com">educacaoatarde@gmail.com</a></p>
          </div>
          <div class="ate-info-item">
            <h3>Instagram</h3>
            <p><a href="https://www.instagram.com/atardeeducacao/" target="_blank" rel="noopener">@atardeeducacao</a></p>
          </div>
          <div class="ate-map">
            <iframe :src="mapSrc" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localização do A TARDE Educação" />
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="ate-section ate-section--alt">
      <div class="ate-container">
        <div class="ate-reveal" v-reveal style="max-width: 640px; margin-bottom: 2.2rem">
          <p class="ate-kicker">Perguntas frequentes</p>
          <h2 class="ate-eyebrow-title">Tem alguma dúvida sobre o A TARDE Educação?</h2>
        </div>
        <div class="ate-faq-list">
          <AccordionItem
            v-for="(item, i) in faq"
            :key="item.pergunta"
            :title="item.pergunta"
            :open="openFaq === i"
            class="ate-reveal"
            v-reveal="i * 60"
            @toggle="toggleFaq(i)"
          >
            <p>{{ item.resposta }}</p>
          </AccordionItem>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ate-contato__grid {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;
}
@media (min-width: 860px) {
  .ate-contato__grid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}

.ate-form {
  padding: clamp(1.75rem, 4vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
.ate-field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.ate-field label {
  font-size: 0.86rem;
  font-weight: 700;
  color: var(--ate-ink-soft);
}
.ate-field input,
.ate-field textarea {
  font-family: inherit;
  font-size: 0.98rem;
  padding: 0.75rem 0.9rem;
  border-radius: var(--ate-radius-sm);
  border: 1px solid var(--ate-line);
  background: var(--ate-bg);
  color: var(--ate-ink);
  resize: vertical;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.ate-field input:focus,
.ate-field textarea:focus {
  outline: none;
  border-color: var(--ate-blue);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--ate-blue) 20%, transparent);
}
.ate-form button {
  align-self: flex-start;
}
.ate-form__sent {
  font-size: 0.88rem;
  color: var(--ate-ink-soft);
  background: var(--ate-bg-alt);
  padding: 0.9rem 1rem;
  border-radius: var(--ate-radius-sm);
}
.ate-form__sent a {
  color: var(--ate-blue);
  font-weight: 700;
}

.ate-contato-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.ate-info-item h3 {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ate-ink-soft);
  margin-bottom: 0.4rem;
}
.ate-info-item p a {
  color: var(--ate-blue);
  font-weight: 600;
}

.ate-map {
  border-radius: var(--ate-radius);
  overflow: hidden;
  border: 1px solid var(--ate-line);
  aspect-ratio: 4 / 3;
}
.ate-map iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.ate-faq-list {
  max-width: 780px;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}
</style>
