// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Site institucional, sem backend por enquanto — SSR + prerender (nuxt
  // generate) pra sair como HTML estático de verdade (bom pra SEO e pra
  // hospedar no Netlify sem função nenhuma rodando). Ver nota no relatório
  // sobre Supabase futuro pro CMS de notícias.
  ssr: true,

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'A TARDE Educação — Educação que conecta informação, conhecimento e transformação',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'A TARDE Educação é o programa de educomunicação do Grupo A TARDE, aproximando comunicação e educação há três décadas para formar leitores, educadores e estudantes mais críticos e participativos.',
        },
        { name: 'theme-color', content: '#0972B3' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'A TARDE Educação' },
        { property: 'og:url', content: 'https://atardeeducacao.netlify.app/' },
        {
          property: 'og:title',
          content: 'A TARDE Educação — Educação que conecta informação, conhecimento e transformação',
        },
        {
          property: 'og:description',
          content:
            'Projetos, formações e experiências que aproximam educação, comunicação e conhecimento. Um programa do Jornal A TARDE desde 1996.',
        },
        { property: 'og:image', content: 'https://atardeeducacao.netlify.app/marca/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'pt_BR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://atardeeducacao.netlify.app/marca/og-image.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/marca/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/marca/favicon-16.png' },
        { rel: 'apple-touch-icon', href: '/marca/apple-touch-icon.png' },
      ],
      // Aplica o tema salvo (ou a preferência do SO) antes da hidratação,
      // pra nunca piscar claro->escuro na carga da página.
      script: [
        {
          innerHTML: `(function(){try{var t=localStorage.getItem('ate-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
        },
      ],
    },
  },

  css: [
    '@fontsource/bree-serif/index.css',
    '@fontsource-variable/open-sans/wght.css',
    '@fontsource-variable/open-sans/wght-italic.css',
    '~/assets/css/main.css',
  ],

  nitro: {
    preset: 'netlify',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/o-programa',
        '/area-de-atuacao',
        '/formacoes',
        '/eventos',
        '/depoimentos',
        '/noticias',
        '/galeria',
        '/contato',
      ],
    },
  },
})
