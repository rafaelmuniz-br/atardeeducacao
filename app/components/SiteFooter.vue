<script setup lang="ts">
const year = new Date().getFullYear()

const mapaSite = [
  { to: '/o-programa', label: 'O Programa' },
  { to: '/area-de-atuacao', label: 'Área de Atuação' },
  { to: '/cursos', label: 'Formações' },
  { to: '/noticias', label: 'Notícias' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/depoimentos', label: 'Depoimentos' },
  // Galeria oculta a pedido do cliente — ver mesmo comentário em SiteHeader.vue.
  // { to: '/galeria', label: 'Galeria' },
  { to: '/contato', label: 'Contato' },
]
</script>

<template>
  <footer class="ate-footer">
    <div class="ate-container ate-footer__grid">
      <div class="ate-footer__brand">
        <p class="ate-footer__tagline">
          Um programa de educomunicação do Grupo A TARDE, aproximando comunicação e educação desde 1996.
        </p>
        <div class="ate-footer__social">
          <a href="https://www.instagram.com/atardeeducacao/" target="_blank" rel="noopener noreferrer" aria-label="Instagram do A TARDE Educação">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://atarde.com.br/" target="_blank" rel="noopener noreferrer" aria-label="Site do Jornal A TARDE">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.6 2.6 4 5.7 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.7-4-9s1.4-6.4 4-9Z" />
            </svg>
          </a>
          <a href="mailto:educacaoatarde@gmail.com" aria-label="E-mail do A TARDE Educação">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="3" y="5" width="18" height="14" rx="2.5" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
        </div>
      </div>

      <div class="ate-footer__col">
        <h3>Mapa do site</h3>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li v-for="item in mapaSite" :key="item.to"><NuxtLink :to="item.to">{{ item.label }}</NuxtLink></li>
        </ul>
      </div>

      <div class="ate-footer__col">
        <h3>Contato</h3>
        <ul class="ate-footer__contact">
          <li>Rua Professor Milton Cayres de Brito, 204, Salvador — Bahia</li>
          <li><a href="mailto:educacaoatarde@gmail.com">educacaoatarde@gmail.com</a></li>
          <li><NuxtLink to="/contato">Fale Conosco →</NuxtLink></li>
          <li><NuxtLink to="/contato#faq">Perguntas frequentes →</NuxtLink></li>
        </ul>
      </div>
    </div>

    <div class="ate-footer__bottom">
      <div class="ate-container ate-footer__bottom-inner">
        <p>&copy; {{ year }} A TARDE Educação. Todos os direitos reservados.</p>
        <div class="ate-footer__legal-links">
          <NuxtLink to="/politicas-e-termos#privacidade">Política de Privacidade</NuxtLink>
          <NuxtLink to="/politicas-e-termos#termos">Termos de Uso</NuxtLink>
          <NuxtLink to="/politicas-e-termos#cookies">Cookies</NuxtLink>
        </div>
        <p>Um programa do <a href="https://atarde.com.br/" target="_blank" rel="noopener noreferrer">Jornal A TARDE</a></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ate-footer {
  background: var(--ate-ink);
  color: #cfe0ec;
}
:root[data-theme='dark'] .ate-footer {
  background: #060d14;
  border-top: 1px solid var(--ate-line);
}

.ate-footer__grid {
  display: grid;
  gap: 2.5rem;
  padding: 4rem 1.5rem 3rem;
  grid-template-columns: 1.3fr 1fr 1fr;
}

.ate-footer__tagline {
  color: #a9c1d3;
  font-size: 0.94rem;
  max-width: 34ch;
  margin-bottom: 1.25rem;
}

.ate-footer__social {
  display: flex;
  gap: 0.6rem;
}
.ate-footer__social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: #cfe0ec;
  transition: background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
}
.ate-footer__social a:hover {
  background: var(--ate-orange);
  border-color: var(--ate-orange);
  color: #1a1005;
  transform: translateY(-3px);
}

.ate-footer h3 {
  font-family: var(--ate-font-body);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fff;
  margin-bottom: 1.1rem;
}

.ate-footer__col ul {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.ate-footer__col a {
  color: #a9c1d3;
  font-size: 0.94rem;
  transition: color 0.15s ease;
}
.ate-footer__col a:hover {
  color: var(--ate-orange);
}

.ate-footer__contact li {
  color: #a9c1d3;
  font-size: 0.94rem;
  line-height: 1.55;
}

.ate-footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.ate-footer__bottom-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  font-size: 0.82rem;
  color: #8ba6ba;
}
.ate-footer__bottom-inner a {
  color: #8ba6ba;
}
.ate-footer__bottom-inner a:hover {
  color: var(--ate-orange);
}

.ate-footer__legal-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1.2rem;
}

@media (max-width: 760px) {
  .ate-footer__grid {
    grid-template-columns: 1fr;
  }
}
</style>
